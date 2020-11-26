import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';

import router from '@/router'

Amplify.configure(aws_exports);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
