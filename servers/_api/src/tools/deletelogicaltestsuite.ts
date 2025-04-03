import { z } from "zod"

export const toolName = `deletelogicaltestsuite`
export const toolDescription = `Delete a logical test suite`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testSuites/name/{name}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "hardDelete"
  ],
  "header": [],
  "path": [
    "name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string().describe("FQN of the logical test suite"), "hardDelete": z.boolean().describe("Hard delete the logical entity. (Default = `false`)") }).shape