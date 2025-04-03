import { z } from "zod"

export const toolName = `listadcentityadditiontypes`
export const toolDescription = `List entity addition types`
export const baseUrl = `/api`
export const path = `/v1/custom/{type}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "limit",
    "before",
    "after",
    "include"
  ],
  "header": [],
  "path": [
    "type"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "type": z.string(), "fields": z.string().describe("Fields requested in the returned resource").optional(), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number of entity addition types returned. (1 to 1000000, default = 10)"), "before": z.string().describe("Returns list of entity addition types before this cursor").optional(), "after": z.string().describe("Returns list of entity addition types after this cursor").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape