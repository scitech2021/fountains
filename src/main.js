import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router/dist/vue-router.esm.browser";
import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/', component: App}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
// eslint-disable-next-line no-unused-vars
const router = new VueRouter({
  routes // short for `routes: routes`
})
Vue.use(BootstrapVue)

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  render: h => h(App),
  router
}).$mount('#app')

