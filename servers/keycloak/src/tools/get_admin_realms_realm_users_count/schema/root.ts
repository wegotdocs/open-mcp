import { z } from "zod"

export const inputParams = {
  "email": z.string().describe("email filter").optional(),
  "emailVerified": z.boolean().optional(),
  "enabled": z.boolean().describe("Boolean representing if user is enabled or not").optional(),
  "firstName": z.string().describe("first name filter").optional(),
  "lastName": z.string().describe("last name filter").optional(),
  "q": z.string().optional(),
  "search": z.string().describe("arbitrary search string for all the fields below. Default search behavior is prefix-based (e.g., foo or foo*). Use *foo* for infix search and \"foo\" for exact search.").optional(),
  "username": z.string().describe("username filter").optional()
}