<template>
<div class="container">
    <h1>Albums for {{user.username}}</h1>
    <div id="leads">
    
    <FormulateForm
    class="login-form"
    name="create-album"
    @submit="submitHandler"
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
      label="Create Album"
    />
  
    </FormulateForm>
    
    <div v-for="album in albums" :key="album.id">
      <h3><router-link :to="{ name: 'Album' ,  params: { id: album.id }}">{{ album.name }}</router-link></h3>
      <p>{{ album.description }}</p>
    </div>
    
    </div>
</div>
</template>

<script>
import {
    Auth
} from 'aws-amplify'

import { API, graphqlOperation } from 'aws-amplify'
import { createAlbum } from '@/graphql/mutations'
import { listAlbums } from '@/graphql/queries'
import { onCreateAlbum } from '@/graphql/subscriptions';

export default {
    name: 'Albums',
    async created() {
        this.getAlbums();
        this.subscribe();
    },
    data() {
        return {
            user: {},
            formValues: {},
            albums: {}
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
        async submitHandler (data) {
            await API.graphql({
                query: createAlbum,
                variables: {input: data},
            });
            this.$formulate.reset('create-album')

        },
        async getAlbums() {
            const albums = await API.graphql({
                query: listAlbums
            });
            console.log(albums)
            this.albums = albums.data.listAlbums.items;
        },
        async subscribe() {
        const owner = await Auth.currentAuthenticatedUser()
        API.graphql(
            graphqlOperation(onCreateAlbum,
                {
                owner: owner.username
                }
            )
        )
            .subscribe({
            next: (eventData) => {
                let album = eventData.value.data.onCreateAlbum;
                if (this.albums.some(item => item.name === album.name)) return; // remove duplications
                this.albums = [...this.albums, album];
            }
        });
    }
    }
}
</script>
