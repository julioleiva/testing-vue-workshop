import { nextTick } from 'vue'
import useFetch from '../useFetch'
import { it, describe, beforeEach, expect } from 'vitest'
import fetchMock from 'fetch-mock'

describe('useFetch', () => {
  beforeEach(() => {
    fetchMock.reset()
  })

  it('realiza una solicitud y maneja la respuesta correctamente', async () => {
    fetchMock.mock('https://randomuser.me/api/', { data: 'test data' })

    const { data, error, loading } = await useFetch('https://randomuser.me/api/')

    await nextTick()

    expect(loading.value).toBe(false)
    expect(data.value).toEqual({ data: 'test data' })
    expect(error.value).toBe(null)
  })

  it('maneja los errores correctamente', async () => {
    fetchMock.mock('https://randomuser.me/api/', 500)

    const { data, error, loading } = await useFetch('https://randomuser.me/api/')

    await nextTick()

    expect(loading.value).toBe(false)
    expect(data.value).toBe(null)
    expect(error.value).toBeTruthy()
  })
})
