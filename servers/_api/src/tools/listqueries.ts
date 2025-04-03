import { z } from "zod"

export const toolName = `listqueries`
export const toolDescription = `Get a list of Queries`
export const baseUrl = `/api`
export const path = `/v1/queries`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "entityId",
    "limit",
    "before",
    "after",
    "include"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fields": z.string().describe("Fields requested in the returned resource").optional(), "entityId": z.string().uuid().describe("UUID of the entity for which to list the Queries").optional(), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number queries returned. (1 to 1000000, default = 10)"), "before": z.string().describe("Returns list of queries before this cursor").optional(), "after": z.string().describe("Returns list of queries after this cursor").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape