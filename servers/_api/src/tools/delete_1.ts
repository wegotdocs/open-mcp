import { z } from "zod"

export const toolName = `delete_1`
export const toolDescription = `Delete an AdccGlossaryTermType`
export const baseUrl = `/api`
export const path = `/v1/adcGlossaryTermTypes/{id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Chart Id"), "recursive": z.boolean().describe("Recursively delete this entity and it's children. (Default `false`)") }).shape