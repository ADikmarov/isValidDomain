import { isValidDomain } from "./isValidDomain";

export function isValidEmail(email: string) {
    const topDomain = email.substring(1 + email.lastIndexOf('.'));
    return isValidDomain(topDomain);
}
