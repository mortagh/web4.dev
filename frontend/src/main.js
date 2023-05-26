import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import IconButton from './components/button/IconButton.vue'
import SubmitButton from './components/form/SubmitButton.vue'
import MyInput from './components/form/MyInput.vue'

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPlus, faRightFromBracket, faDownload, faTrash, faTag } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faRightFromBracket, faDownload, faTrash, faTag)

const app = createApp(App)
.component('IconButton', IconButton)
.component('SubmitButton', SubmitButton)
.component('MyInput', MyInput)
.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')

