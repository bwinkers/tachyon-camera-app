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

    <FormulateInput
        type="image"
        name="headshot"
        label="Select an image to upload"
        help="Select a png, jpg or gif to upload."
        validation="mime:image/jpeg,image/png,image/gif"
        :uploader="uploadToS3"
    />

<amplify-s3-image-picker button-text="Choose "
                    header-title="CMS File Uploader"
                    title="Photo Upload"
                    path="uploads/"
                    track=true
                    identity-id="brian"
                     />

 <amplify-photo-picker v-bind:photoPickerConfig="photoPickerConfig"></amplify-photo-picker>

<amplify-s3-album path="uploads/"></amplify-s3-album>

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
        this.getAlbum(this.$route.params.id)
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
        async uploadFile(file) {
            const fileName = 'upload/'+uuidv4()
            const user = await Auth.currentAuthenticatedUser();

            const result = await Storage.vault.put(
            fileName, 
            file, 
            {
                metadata: {
                albumid: this.albumId,
                owner: user.username,
                }
            })

             console.log('Uploaded file: ', result);
        },
        async uploadToS3 (file, progress, error, option) {
            //const user = await Auth.currentAuthenticatedUser();
            console.log('made it' + file + progress + error + option)
            const uid = await uuidv4()
            console.log(uid)

            const fileName = 'uploads/' + uid 

            await Storage.put(fileName, file, {
                progressCallback(progress) {
                    console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
                },
            })
            .then (result => console.log(result))
            .catch(err => console.log(err));
        }
    }
  }

  </script>
