import { z } from "zod"

export const toolName = `deletecontainer`
export const toolDescription = `Delete a Container`
export const baseUrl = `/api`
export const path = `/v1/containers/{id}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Container Id"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape