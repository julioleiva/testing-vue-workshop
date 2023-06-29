import { nextTick } from 'vue'
import useFetch from '../useFetch'
import { it, describe, beforeEach, expect } from 'vitest'
import fetchMock from 'fetch-mock'

describe('useFetch', () => {
  beforeEach(() => {
    fetchMock.reset()
  })

  it('makes a request and handles the response correctly', async () => {
    fetchMock.mock('https://randomuser.me/api/', { data: 'test data' })

    const { data, error, loading } = await useFetch('https://randomuser.me/api/')

    await nextTick()

    expect(loading.value).toBe(false)
    expect(data.value).toEqual({ data: 'test data' })
    expect(error.value).toBe(null)
  })

  it('handles errors correctly', async () => {
    fetchMock.mock('https://randomuser.me/api/', 500)

    const { data, error, loading } = await useFetch('https://randomuser.me/api/')

    await nextTick()

    expect(loading.value).toBe(false)
    expect(data.value).toBe(null)
    expect(error.value).toBeTruthy()
  })
})
