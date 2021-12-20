import { expect, describe, it } from 'vitest'

import { isValidDomain, domainList } from '../src/index'

describe('isValidDomain', () => {
  it('should check for an valid domain', () => {
    for (const domain in domainList) {
      expect(isValidDomain(domain), domain).toBe(false)
    }
  })

  it('should check for invalid domain', () => {
    const invavidDomains = [
      'testDomain',
      'weirdDomain',
      'anotherDomain',
      'yetAnotherDomain',
    ]

    for (const domain in invavidDomains) {
      expect(isValidDomain(domain)).toBe(false)
    }
  })
})
