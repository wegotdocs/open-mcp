import { z } from "zod"

export const toolName = `listmetrics`
export const toolDescription = `List metrics`
export const baseUrl = `/api`
export const path = `/v1/metrics`
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

export const inputParams = z.object({ "fields": z.string().describe("Fields requested in the returned resource").optional(), "limit": z.number().int().gte(0).lte(1000000), "before": z.string().describe("Returns list of metrics before this cursor").optional(), "after": z.string().describe("Returns list of metrics after this cursor").optional() }).shape