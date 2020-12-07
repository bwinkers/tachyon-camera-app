<template>
<div class="container">
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

    <FormulateInput
        type="image"
        name="headshot"
        label="Select an image to upload"
        help="Select a png, jpg or gif to upload."
        validation="mime:image/jpeg,image/png,image/gif"
        :uploader="uploadToS3"
    />
    </div>
    <div>
    <router-link :to="{ name: 'AlbumCamera', params: { id: this.$route.params.id } }">Camera</router-link>
    <button type="button" class="btn btn-primary" >Camera</button>
    </div>
</div>
</template>

<script>
import Amplify, { API, Auth, Storage } from 'aws-amplify'
import awsconfig from '@/aws-exports';
Amplify.configure(awsconfig);

import { updateAlbum } from '@/graphql/mutations'
import { getAlbum } from '@/graphql/queries'
import { v4 as uuidv4 } from 'uuid';

const photoPickerConfig = {
  path: 'uploads/',
  headerTitle: 'Upload to CMS',
  buttonText: 'Upload',
  storageOptions: {
      level: 'private',
      ExtraArgs: {"Metadata": {"mykey": "myvalue"}}
  }	
}

export default {
    name: 'Album',

    async created() {
        console.log(this.$route.params.id)
        const albumId = this.$route.params.id
        this.albumId = albumId
        this.getAlbum(albumId)
    },
    data() {
        return {
            user: {},
            formValues: {},
            album: {},
            photoPickerConfig
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

        },
        async uploadToS3 (file, progress, error, option) {
            const user = await Auth.currentAuthenticatedUser();
            console.log(user)
            console.log('made it' + file + progress + error + option)
            const uid = await uuidv4()
            console.log(uid)

            const metadata = {
                    albumId: this.albumId,
                    owner: user.username,
                    ownerId: user.id,
                }

            console.log(metadata)

            const fileName = 'uploads/' + uid 

            await Storage.vault.put(fileName, file, {

                metadata: metadata
            })
            .then (result => console.log(result))
            .catch(err => console.log(err));
        }
    }
  }

  </script>
