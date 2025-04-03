import { z } from "zod"

export const toolName = `getexecutionsummaryoftestcases`
export const toolDescription = `Get the execution summary of test cases`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testCases/executionSummary`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "testSuiteId"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "testSuiteId": z.string().uuid().describe("get summary for a specific test suite").optional() }).shape