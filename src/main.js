import { createApp } from 'vue'
import './style.css'
import './assets/zakatreport.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Lara from './presets/lara'
import router from './router'
import 'primeicons/primeicons.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);

app.use(PrimeVue, {
    unstyled: true,
    pt: Lara,

});
app.use(router);

app.use(VueSweetalert2);
window.Swal =  app.config.globalProperties.$swal;
app.mount('#app');