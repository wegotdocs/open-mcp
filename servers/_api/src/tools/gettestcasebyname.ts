import { z } from "zod"

export const toolName = `gettestcasebyname`
export const toolDescription = `Get a test case by fully qualified name`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testCases/name/{fqn}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "include"
  ],
  "header": [],
  "path": [
    "fqn"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fqn": z.string().describe("Fully qualified name of the test case"), "fields": z.string().describe("Fields requested in the returned resource").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape