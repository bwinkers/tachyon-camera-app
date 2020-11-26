<template>
<div class="container">
    <h1>Leads for {{user.username}}</h1>
    <div id="leads"></div>
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
    }
}
</script>
