import { z } from "zod"

export const toolName = `listtables`
export const toolDescription = `List tables`
export const baseUrl = `/api`
export const path = `/v1/tables`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "database",
    "databaseSchema",
    "includeEmptyTestSuite",
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

export const inputParams = z.object({ "fields": z.string().describe("Fields requested in the returned resource").optional(), "database": z.string().describe("Filter tables by database fully qualified name").optional(), "databaseSchema": z.string().describe("Filter tables by databaseSchema fully qualified name").optional(), "includeEmptyTestSuite": z.boolean().describe("Include tables with an empty test suite (i.e. no test cases have been created for this table). Default to true"), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number tables returned. (1 to 1000000, default = 10) "), "before": z.string().describe("Returns list of tables before this cursor").optional(), "after": z.string().describe("Returns list of tables after this cursor").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape