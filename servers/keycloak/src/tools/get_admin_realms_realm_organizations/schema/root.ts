import { z } from "zod"

export const inputParams = {
  "briefRepresentation": z.boolean().describe("if true, return the full representation. Otherwise, only the basic fields are returned.").optional(),
  "exact": z.boolean().describe("Boolean which defines whether the param 'search' must match exactly or not").optional(),
  "first": z.number().int().describe("The position of the first result to be processed (pagination offset)").optional(),
  "max": z.number().int().describe("The maximum number of results to be returned - defaults to 10").optional(),
  "q": z.string().describe("A query to search for custom attributes, in the format 'key1:value2 key2:value2'").optional(),
  "search": z.string().describe("A String representing either an organization name or domain").optional()
}