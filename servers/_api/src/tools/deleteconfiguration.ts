import { z } from "zod"

export const toolName = `deleteconfiguration`
export const toolDescription = `Delete a Configuration`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/glossaryTerm/configurations/{id}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Configuration Id"), "recursive": z.boolean().describe("Recursively delete this entity and it's children. (Default `false`)"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape