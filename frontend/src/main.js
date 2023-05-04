import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import IconButton from './components/IconButton.vue'
import SubmitButton from './components/SubmitButton.vue'
import MyInput from './components/MyInput.vue'

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPlus, faRightFromBracket, faDownload, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faRightFromBracket, faDownload, faTrash)

const app = createApp(App)
.component('IconButton', IconButton)
.component('SubmitButton', SubmitButton)
.component('MyInput', MyInput)
.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')

