import { z } from "zod"

export const toolName = `listtestcaseresults`
export const toolDescription = `List of test case results`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testCases/{fqn}/testCaseResult`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "startTs",
    "endTs"
  ],
  "header": [],
  "path": [
    "fqn"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fqn": z.string().describe("Fully qualified name of the test case"), "startTs": z.number().describe("Filter testCase results after the given start timestamp").optional(), "endTs": z.number().describe("Filter testCase results before the given end timestamp").optional() }).shape