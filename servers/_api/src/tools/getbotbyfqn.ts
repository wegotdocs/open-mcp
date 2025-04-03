import { z } from "zod"

export const toolName = `getbotbyfqn`
export const toolDescription = `Get a bot by name`
export const baseUrl = `/api`
export const path = `/v1/bots/name/{name}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "include"
  ],
  "header": [],
  "path": [
    "name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string().describe("Name of the bot"), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape