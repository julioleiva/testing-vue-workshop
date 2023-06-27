import { mount } from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import Modal from '../Modal.vue'

describe('Modal.vue', () => {
  it('se renderiza correctamente', () => {
    const wrapper = mount(Modal)
    expect(wrapper.find('.modal-overlay').exists()).toBe(true)
    expect(wrapper.find('.modal').exists()).toBe(true)
  })

  it('emite el evento "close" cuando se hace clic en el botón "Cerrar"', async () => {
    const wrapper = mount(Modal)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  it('emite el evento "close" cuando se hace clic en el overlay pero no en el modal', async () => {
    const wrapper = mount(Modal)
    await wrapper.find('.modal-overlay').trigger('click.self')
    expect(wrapper.emitted()).toHaveProperty('close')
  })
})
