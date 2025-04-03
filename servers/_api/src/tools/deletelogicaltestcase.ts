import { z } from "zod"

export const toolName = `deletelogicaltestcase`
export const toolDescription = `Delete a logical test case by Id from a test suite`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testCases/logicalTestCases/{testSuiteId}/{id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "testSuiteId",
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "testSuiteId": z.string().uuid(), "id": z.string().uuid() }).shape