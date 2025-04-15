import { z } from "zod"

export const inputParamsSchema = {
  "exact": z.boolean().describe("Boolean which defines whether the param 'search' must match exactly or not").optional(),
  "first": z.number().int().describe("The position of the first result to be processed (pagination offset)").optional(),
  "max": z.number().int().describe("The maximum number of results to be returned. Defaults to 10").optional(),
  "membershipType": z.string().describe("The membership type").optional(),
  "search": z.string().describe("A String representing either a member's username, e-mail, first name, or last name.").optional()
}