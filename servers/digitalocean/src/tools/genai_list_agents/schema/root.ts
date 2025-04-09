import { z } from "zod"

export const inputParams = {
  "only_deployed": z.boolean().describe("Only list agents that are deployed.").optional(),
  "page": z.number().int().describe("Page number.").optional(),
  "per_page": z.number().int().describe("Items per page.").optional()
}