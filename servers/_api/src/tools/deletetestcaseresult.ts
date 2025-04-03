import { z } from "zod"

export const toolName = `deletetestcaseresult`
export const toolDescription = `Delete test case result`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testCases/{fqn}/testCaseResult/{timestamp}`
export const method = `delete`
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

export const inputParams = z.object({ "fqn": z.string().describe("Fully qualified name of the test case"), "timestamp": z.number().int().describe("Timestamp of the testCase result") }).shape