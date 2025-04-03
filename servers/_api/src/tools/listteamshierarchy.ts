import { z } from "zod"

export const toolName = `listteamshierarchy`
export const toolDescription = `List teams with hierarchy`
export const baseUrl = `/api`
export const path = `/v1/teams/hierarchy`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "limit",
    "isJoinable"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "limit": z.number().int().gte(1000).lte(1000000).describe("Limit the number of teams returned. (1 to 1000000, default = 10)"), "isJoinable": z.boolean().describe("Filter the results by whether the team can be joined by any user or not").optional() }).shape