import { z } from "zod"

export const toolName = `deletelogicaltestsuite_1`
export const toolDescription = `Delete a logical test suite`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testSuites/{id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "hardDelete"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the logical test suite"), "hardDelete": z.boolean().describe("Hard delete the logical entity. (Default = `false`)") }).shape