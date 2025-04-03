import { z } from "zod"

export const toolName = `deletecontainerbyfqn`
export const toolDescription = `Delete a Container by fully qualified name`
export const baseUrl = `/api`
export const path = `/v1/containers/name/{fqn}`
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

export const inputParams = z.object({ "fqn": z.string().describe("Name of the Container"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape