import { z } from "zod"

export const toolName = `deletedbschema`
export const toolDescription = `Delete a schema by Id`
export const baseUrl = `/api`
export const path = `/v1/databaseSchemas/{id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "recursive",
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Database schema Id"), "recursive": z.boolean().describe("Recursively delete this entity and it's children. (Default `false`)"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape