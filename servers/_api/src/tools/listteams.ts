import { z } from "zod"

export const toolName = `listteams`
export const toolDescription = `List teams`
export const baseUrl = `/api`
export const path = `/v1/teams`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "limit",
    "before",
    "after",
    "parentTeam",
    "isJoinable",
    "include"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fields": z.string().describe("Fields requested in the returned resource").optional(), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number of teams returned. (1 to 1000000, default = 10)"), "before": z.string().describe("Returns list of teams before this cursor").optional(), "after": z.string().describe("Returns list of teams after this cursor").optional(), "parentTeam": z.string().describe("Filter the results by parent team name").optional(), "isJoinable": z.boolean().describe("Filter the results by whether the team can be joined by any user or not").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape