import { z } from "zod"

export const inputParams = {
  "briefRepresentation": z.boolean().describe("Boolean which defines whether brief representations are returned (default: false)").optional(),
  "email": z.string().describe("A String contained in email, or the complete email, if param \"exact\" is true").optional(),
  "emailVerified": z.boolean().describe("whether the email has been verified").optional(),
  "enabled": z.boolean().describe("Boolean representing if user is enabled or not").optional(),
  "exact": z.boolean().describe("Boolean which defines whether the params \"last\", \"first\", \"email\" and \"username\" must match exactly").optional(),
  "first": z.number().int().describe("Pagination offset").optional(),
  "firstName": z.string().describe("A String contained in firstName, or the complete firstName, if param \"exact\" is true").optional(),
  "idpAlias": z.string().describe("The alias of an Identity Provider linked to the user").optional(),
  "idpUserId": z.string().describe("The userId at an Identity Provider linked to the user").optional(),
  "lastName": z.string().describe("A String contained in lastName, or the complete lastName, if param \"exact\" is true").optional(),
  "max": z.number().int().describe("Maximum results size (defaults to 100)").optional(),
  "q": z.string().describe("A query to search for custom attributes, in the format 'key1:value2 key2:value2'").optional(),
  "search": z.string().describe("A String contained in username, first or last name, or email. Default search behavior is prefix-based (e.g., foo or foo*). Use *foo* for infix search and \"foo\" for exact search.").optional(),
  "username": z.string().describe("A String contained in username, or the complete username, if param \"exact\" is true").optional()
}