import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './assets/main.css'



//google webfontloader
import './assets/font.css'
import { loadFonts } from './plugins/webfontloader'
loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
