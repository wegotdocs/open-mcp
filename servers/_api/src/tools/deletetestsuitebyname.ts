import { z } from "zod"

export const toolName = `deletetestsuitebyname`
export const toolDescription = `Delete a test suite`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testSuites/executable/name/{name}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "recursive",
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

export const inputParams = z.object({ "name": z.string().describe("Name of the test suite"), "recursive": z.boolean().describe("Recursively delete this entity and it's children. (Default `false`)"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape