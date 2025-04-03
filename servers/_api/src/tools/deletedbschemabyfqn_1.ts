import { z } from "zod"

export const toolName = `deletedbschemabyfqn_1`
export const toolDescription = `Delete a schema by fully qualified name`
export const baseUrl = `/api`
export const path = `/v1/storedProcedures/name/{fqn}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "hardDelete",
    "recursive"
  ],
  "header": [],
  "path": [
    "fqn"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fqn": z.string().describe("Name of the DBSchema"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)"), "recursive": z.boolean().describe("Recursively delete this entity and it's children. (Default `false`)") }).shape