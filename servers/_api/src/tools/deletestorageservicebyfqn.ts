import { z } from "zod"

export const toolName = `deletestorageservicebyfqn`
export const toolDescription = `Delete an StorageService by fully qualified name`
export const baseUrl = `/api`
export const path = `/v1/services/storageServices/name/{fqn}`
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

export const inputParams = z.object({ "fqn": z.string().describe("Name of the StorageService"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape