import { z } from "zod"

export const toolName = `patchtestcaseresult`
export const toolDescription = `Update a test case result`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testCases/{fqn}/testCaseResult/{timestamp}`
export const method = `patch`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "fqn",
    "timestamp"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fqn": z.string().describe("fqn of the test case"), "timestamp": z.number().int().describe("Timestamp of the testCase result") }).shape