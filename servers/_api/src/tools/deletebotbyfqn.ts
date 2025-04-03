import { z } from "zod"

export const toolName = `deletebotbyfqn`
export const toolDescription = `Delete a bot by name`
export const baseUrl = `/api`
export const path = `/v1/bots/name/{name}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "hardDelete"
  ],
  "header": [],
  "path": [
    "name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string().describe("Name of the bot"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape