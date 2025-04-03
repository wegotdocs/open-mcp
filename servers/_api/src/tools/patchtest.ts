import { z } from "zod"

export const toolName = `patchtest`
export const toolDescription = `Update a test case`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testCases/{id}`
export const method = `patch`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the test case") }).shape