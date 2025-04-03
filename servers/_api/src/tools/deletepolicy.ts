import { z } from "zod"

export const toolName = `deletepolicy`
export const toolDescription = `Delete a policy by Id`
export const baseUrl = `/api`
export const path = `/v1/policies/{id}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the policy"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape