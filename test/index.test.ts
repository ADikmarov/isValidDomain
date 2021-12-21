import { expect, describe, it } from 'vitest'

import { isValidDomain, isValidEmail, domainList } from '../src/index'

describe('isValidDomain', () => {
  it('should check for an valid domain', () => {
    for (const domain of domainList) {
      expect(isValidDomain(domain)).toBe(true)
    }
  })

  it('should check for an valid email', () => {
    const validEmails = ['hello@gmail.com', 'valid@mail.edu']
    for (const email of validEmails) {
      expect(isValidEmail(email)).toBe(true)
    }
  })

  it('should check for invalid domain', () => {
    const invavidDomains = [
      'testDomain',
      'weirdDomain',
      'anotherDomain',
      'yetAnotherDomain',
    ]

    for (const domain of invavidDomains) {
      expect(isValidDomain(domain)).toBe(false)
    }
  })

  it('should check for invalid email', () => {
    const validEmails = ['hello@gmail.commm', 'valid@mail.eduuu']
    for (const email of validEmails) {
      expect(isValidEmail(email)).toBe(false)
    }
  })
})
