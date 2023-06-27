import { createPinia } from 'pinia'
import { useContactsStore } from '../contacts'
import { it, describe, beforeEach, expect } from 'vitest'
import fetchMock from 'fetch-mock'

describe('contacts store', () => {
  let store

  beforeEach(() => {
    fetchMock.reset()
    // Create a new Pinia instance and set it as the active one
    const pinia = createPinia()
    pinia.use(useContactsStore)
    store = useContactsStore(pinia)
  })

  it('loads more contacts correctly', async () => {
    const mockData = { results: ['contact1', 'contact2'] }
    fetchMock.mock('https://randomuser.me/api/?results=20&page=1', mockData)

    await store.loadMoreContacts()

    expect(store.contacts).toEqual(mockData.results)
    expect(store.nextPage).toBe(2)
  })

  it('saves a contact correctly', () => {
    const contact = { name: 'John Doe' }
    store.saveContact(contact)

    expect(store.savedContacts).toContain(contact)
  })

  it('removes a contact correctly', () => {
    const contact = { name: 'John Doe' }
    store.setContacts([contact])

    store.removeContact(0)

    expect(store.contacts).not.toContain(contact)
  })

  it('sets the search query correctly', () => {
    const query = 'John Doe'
    store.setSearchQuery(query)

    expect(store.searchQuery).toBe(query)
  })

})
