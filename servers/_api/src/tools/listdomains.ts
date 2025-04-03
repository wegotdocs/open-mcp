import { z } from "zod"

export const toolName = `listdomains`
export const toolDescription = `List domains`
export const baseUrl = `/api`
export const path = `/v1/domains`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
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

export const inputParams = z.object({ "fields": z.string().describe("Fields requested in the returned resource").optional(), "limit": z.number().int().gte(0).lte(1000000), "before": z.string().describe("Returns list of Domain before this cursor").optional(), "after": z.string().describe("Returns list of Domain after this cursor").optional() }).shape