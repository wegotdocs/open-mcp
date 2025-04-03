import { z } from "zod"

export const toolName = `liststoredprocedures`
export const toolDescription = `List Stored Procedures`
export const baseUrl = `/api`
export const path = `/v1/storedProcedures`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "databaseSchema",
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

export const inputParams = z.object({ "fields": z.string().describe("Fields requested in the returned resource").optional(), "databaseSchema": z.string().describe("Filter stored procedures by database schema").optional(), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number schemas returned. (1 to 1000000, default = 10)"), "before": z.string().describe("Returns list of schemas before this cursor").optional(), "after": z.string().describe("Returns list of schemas after this cursor").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape