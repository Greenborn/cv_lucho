import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'primeicons/primeicons.css'

import { VueCustomCursor } from '@greenborn/vue-custom-cursor'; 
import '@greenborn/vue-custom-cursor/dist/library.css';

createApp(App).use(VueCustomCursor).mount('#app')
