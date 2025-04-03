import { z } from "zod"

export const toolName = `deletetable`
export const toolDescription = `Delete a table by Id`
export const baseUrl = `/api`
export const path = `/v1/tables/{id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "hardDelete",
    "recursive"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the table"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)"), "recursive": z.boolean().describe("Recursively delete this entity and it's children. (Default `false`)") }).shape