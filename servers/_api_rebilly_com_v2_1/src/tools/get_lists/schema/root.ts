import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gte(0).lte(1000).describe("The collection items limit").optional(),
  "offset": z.number().int().gte(0).describe("The collection items offset").optional(),
  "filter": z.string().describe("The collection items filter requires a special format.\nUse \",\" for multiple allowed values.  Use \";\" for multiple fields.\nSee the filter guide for more options and examples about this format.\n").optional(),
  "criteria": z.string().describe("The json criteria for collection").optional(),
  "sort": z.array(z.string()).describe("The collection items sort field and order (prefix with \"-\" for descending sort).").optional()
}