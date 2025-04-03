import { z } from "zod"

export const toolName = `getexecutionsummaryoftestcasesforallterms`
export const toolDescription = `Get the execution summary of test cases for all terms`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testCases/executionSummary/term`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({}).shape