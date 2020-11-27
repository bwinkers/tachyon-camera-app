<template>
<div class="container">
    <h1>Album for {{user.username}}</h1>
    <div id="album">
    
    <FormulateForm
    class="login-form"
    name="edit-album"
    @submit="editAlbumHandler"
    v-model="formValues">

    <FormulateInput
      name="name"
      type="text"
      label="Album name"
      placeholder="A short name to remember the album by"
      validation="required"
    />
    <FormulateInput
      name="location"
      type="text"
      label="Location"
      placeholder="location"
      validation="required"
    />

    <FormulateInput
    name="description"
    type="text"
    label="Description"
    placeholder="Description of the album"
    />
    
    <FormulateInput
      type="submit"
      label="Update Album"
    />
  
    </FormulateForm>

<amplify-s3-image-picker />



   

    </div>
</div>
</template>

<script>
import { API, Auth } from 'aws-amplify'
import { updateAlbum } from '@/graphql/mutations'
import { getAlbum } from '@/graphql/queries'


export default {
    name: 'Album',

    async created() {
        console.log(this.$route.params.id)
        this.getAlbum(this.$route.params.id)
    },
    data() {
        return {
            user: {},
            formValues: {},
            album: {}
        }
    },
    beforeCreate() {
        Auth.currentAuthenticatedUser()
            .then(user => {
                this.user = user
            })
            .catch(() => console.log('not signed in...'))
    },
    methods: {
        async getAlbum(albumId) {
            const album = await API.graphql({
                query: getAlbum,
                variables: { id: albumId },
            });
            console.log(album.data.getAlbum)
            this.formValues = album.data.getAlbum
        },
        async editAlbumHandler (data) {
            const sparse = {}
            sparse.name = data.name
            sparse.description = data.description
            sparse.location = data.location
            sparse.id = data.id
            await API.graphql({
                query: updateAlbum,
                variables: {input: sparse},
            });
            //this.$formulate.reset('edit-album')

        }
    }
}
</script>
