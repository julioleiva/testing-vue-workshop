import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import { it, describe, expect  } from 'vitest'

import { routes } from '../router'
import App from '../App.vue'

window.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    return null;
  }

  disconnect() {
    return null;
  }

  unobserve() {
    return null;
  }
};

describe('App.vue', () => {
  it('muestra la barra de navegación y la vista del router', () => {
    const router = createRouter({
      history: createWebHistory(),
      routes,
    })

    const pinia = createPinia()

    const wrapper = mount(App, {
      global: {
        plugins: [router, pinia],
      },
    })

    expect(wrapper.findComponent({ name: 'Navbar' })).toBeTruthy()
    expect(wrapper.find('router-view')).toBeTruthy()
  })
})
