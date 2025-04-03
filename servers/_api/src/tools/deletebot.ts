import { z } from "zod"

export const toolName = `deletebot`
export const toolDescription = `Delete a bot by Id`
export const baseUrl = `/api`
export const path = `/v1/bots/{id}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the bot"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape