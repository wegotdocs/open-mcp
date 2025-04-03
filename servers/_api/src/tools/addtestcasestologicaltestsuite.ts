import { z } from "zod"

export const toolName = `addtestcasestologicaltestsuite`
export const toolDescription = `Add test cases to a logical test suite`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testCases/logicalTestCases`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "testCaseIds",
    "testSuiteId"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "testCaseIds": z.array(z.string().uuid()), "testSuiteId": z.string().uuid() }).shape