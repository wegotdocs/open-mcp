import { z } from "zod"

export const toolName = `listtestsuites`
export const toolDescription = `List test suites`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testSuites`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "limit",
    "testSuiteType",
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

export const inputParams = z.object({ "fields": z.string().describe("Fields requested in the returned resource").optional(), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number test definitions returned. (1 to 1000000, default = 10)"), "testSuiteType": z.string().describe("Returns executable or logical test suites. If omitted, returns all test suites.").optional(), "before": z.string().describe("Returns list of test definitions before this cursor").optional(), "after": z.string().describe("Returns list of test definitions after this cursor").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape