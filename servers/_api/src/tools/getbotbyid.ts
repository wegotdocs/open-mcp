import { z } from "zod"

export const toolName = `getbotbyid`
export const toolDescription = `Get a bot by Id`
export const baseUrl = `/api`
export const path = `/v1/bots/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "include"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the bot"), "include": z.enum(["all","deleted","non-deleted"]) }).shape