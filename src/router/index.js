import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SavedContacts from '../views/SavedContacts.vue'

export const routes = [
  { path: '/', component: HomeView },
  { path: '/saved-contacts', component: SavedContacts }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})