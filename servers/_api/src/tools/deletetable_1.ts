import { z } from "zod"

export const toolName = `deletetable_1`
export const toolDescription = `Delete a table by fully qualified name`
export const baseUrl = `/api`
export const path = `/v1/tables/name/{fqn}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "hardDelete"
  ],
  "header": [],
  "path": [
    "fqn"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fqn": z.string().describe("Name of the table"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape