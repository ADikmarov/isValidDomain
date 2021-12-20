import { domainList } from './domainList'

export function isValidDomain(domain: string): boolean {
  return domainList.includes(domain.toLowerCase())
}
