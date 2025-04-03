import { z } from "zod"

export const toolName = `listtestcases`
export const toolDescription = `List test cases`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testCases`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "limit",
    "before",
    "after",
    "entityLink",
    "testSuiteId",
    "includeAllTests",
    "include",
    "term"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fields": z.string().describe("Fields requested in the returned resource").optional(), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number tests returned. (1 to 1000000, default = 10)"), "before": z.string().describe("Returns list of tests before this cursor").optional(), "after": z.string().describe("Returns list of tests after this cursor").optional(), "entityLink": z.string().describe("Return list of tests by entity link").optional(), "testSuiteId": z.string().describe("Returns list of tests filtered by the testSuite id").optional(), "includeAllTests": z.boolean().describe("Include all the tests at the entity level"), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities."), "term": z.string().uuid().describe("Glossary Term id").optional() }).shape