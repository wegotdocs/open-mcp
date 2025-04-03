import { z } from "zod"

export const toolName = `deleteteam`
export const toolDescription = `Delete a team by id`
export const baseUrl = `/api`
export const path = `/v1/teams/{id}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the team"), "recursive": z.boolean().describe("Recursively delete this team and it's children. (Default `false`)"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape