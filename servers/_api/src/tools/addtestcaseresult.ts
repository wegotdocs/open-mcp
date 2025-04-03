import { z } from "zod"

export const toolName = `addtestcaseresult`
export const toolDescription = `Add test case result data`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testCases/{fqn}/testCaseResult`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "fqn"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fqn": z.string().describe("Fully qualified name of the test case") }).shape