<template>
<div class="container">
    <h1>Leads for {{user.username}}</h1>
    <div id="leads">
    
    <FormulateForm
    class="login-form"
    @submit="submitHandler"
    v-model="formValues">

    <FormulateInput
      name="name"
      type="text"
      label="Report name"
      placeholder="short name to remember the sign by"
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
    placeholder="Description of the issue"
    />
    
    <FormulateInput
      type="submit"
      label="Submit Report"
    />
  
    </FormulateForm>
    
    
    </div>
</div>
</template>

<script>
import {
    Auth
} from 'aws-amplify'



export default {
    name: 'Leads',
    data() {
        return {
            user: {}
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
        submitHandler (data) {
        alert(`Thank you, ${data.name}`)
        }
    }
}
</script>
