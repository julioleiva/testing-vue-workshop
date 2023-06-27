import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SearchInput from '../SearchInput.vue'

describe('SearchInput.vue', () => {
  it('se renderiza correctamente', () => {
    const wrapper = mount(SearchInput)
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('el valor de la entrada es igual a searchQuery', () => {
    const wrapper = mount(SearchInput, {
      props: {
        searchQuery: 'test query'
      }
    })

    expect(wrapper.find('input').element.value).toBe('test query')
  })

  it('emite el evento "update-search-query" con el valor correcto cuando se introduce texto en la entrada', async () => {
    const wrapper = mount(SearchInput)

    await wrapper.find('input').setValue('new query')

    expect(wrapper.emitted()).toHaveProperty('update-search-query')
    expect(wrapper.emitted()['update-search-query'][0]).toEqual(['new query'])
  })
})
