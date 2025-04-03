import { z } from "zod"

export const toolName = `listspecificbotversion`
export const toolDescription = `Get a version of the bot`
export const baseUrl = `/api`
export const path = `/v1/bots/{id}/versions/{version}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id",
    "version"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the bot"), "version": z.string().describe("bot version number in the form `major`.`minor`") }).shape