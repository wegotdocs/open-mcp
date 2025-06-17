import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gte(0).lte(1000).describe("The collection items limit").optional(),
  "offset": z.number().int().gte(0).describe("The collection items offset").optional(),
  "filter": z.string().describe("The collection items filter requires a special format.\nUse \",\" for multiple allowed values.  Use \";\" for multiple fields.\nSee the filter guide for more options and examples about this format.\n").optional(),
  "q": z.string().describe("The partial search of the text fields.").optional(),
  "sort": z.array(z.string()).describe("The collection items sort field and order (prefix with \"-\" for descending sort).").optional(),
  "fields": z.string().describe("Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.").optional(),
  "expand": z.string().describe("Expand response to get full related object instead of ID.  See the expand guide for more info.").optional()
}