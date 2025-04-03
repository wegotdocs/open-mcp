import { z } from "zod"

export const toolName = `getallcounters`
export const toolDescription = `Get info about all counters`
export const baseUrl = `/api`
export const path = `/v1/record/counters`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "limit",
    "after"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number counters returned. (1 to 1000000, default = 10)"), "after": z.string().describe("Returns list of counters after this cursor").optional() }).shape