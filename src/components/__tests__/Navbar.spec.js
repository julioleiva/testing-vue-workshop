import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { describe, expect, it } from 'vitest'

import Navbar from '@/components/Navbar.vue'

describe('Navbar.vue', () => {
    it('se renderiza correctamente', () => {
        const router = createRouter({
            history: createMemoryHistory(),
            routes: [
                { path: '/', component: { template: '<div>Home</div>' } },
                { path: '/saved-contacts', component: { template: '<div>Saved Contacts</div>' } }
            ]
        })

        const wrapper = mount(Navbar, {
            global: {
                plugins: [router]
            }
        })

        expect(wrapper.find('.navbar').exists()).toBe(true)
        expect(wrapper.findAll('.nav-link').length).toBe(2)
    })

    it('los enlaces de navegación apuntan a las rutas correctas', () => {
        const router = createRouter({
            history: createMemoryHistory(),
            routes: [
                { path: '/', component: { template: '<div>Home</div>' } },
                { path: '/saved-contacts', component: { template: '<div>Saved Contacts</div>' } }
            ]
        })

        const wrapper = mount(Navbar, {
            global: {
                plugins: [router]
            }
        })

        const links = wrapper.findAll('.nav-link')

        expect(links[0].attributes().href).toBe('/')
        expect(links[1].attributes().href).toBe('/saved-contacts')
    })
})
