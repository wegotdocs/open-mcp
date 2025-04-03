import { z } from "zod"

export const toolName = `listtypes`
export const toolDescription = `List types`
export const baseUrl = `/api`
export const path = `/v1/metadata/types`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "category",
    "limit",
    "before",
    "after"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "category": z.string().describe("Filter types by metadata type category.").optional(), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number types returned. (1 to 1000000, default = 10)"), "before": z.string().describe("Returns list of types before this cursor").optional(), "after": z.string().describe("Returns list of types after this cursor").optional() }).shape