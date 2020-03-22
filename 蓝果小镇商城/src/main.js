import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false
import rem from "./rem/rem.js";
new Vue({
    router,
    rem,
    render: h => h(App),
}).$mount('#app')