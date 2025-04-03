import { z } from "zod"

export const toolName = `listusers`
export const toolDescription = `List users`
export const baseUrl = `/api`
export const path = `/v1/users`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "team",
    "role",
    "naturalSort",
    "sortField",
    "limit",
    "before",
    "after",
    "isAdmin",
    "isBot",
    "include"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fields": z.string().describe("Fields requested in the returned resource").optional(), "team": z.string().describe("Filter users by team name. To get users without team set value 'filterNoTeam'").optional(), "role": z.string().describe("Filter users by role name. To get users without team set value 'filterNoRole'").optional(), "naturalSort": z.boolean().describe("Natural sort"), "sortField": z.string().describe("Field for sorting: team/role/name/dname").optional(), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number users returned. (1 to 1000000, default = 10)"), "before": z.string().describe("Returns list of users before this cursor").optional(), "after": z.string().describe("Returns list of users after this cursor").optional(), "isAdmin": z.boolean().describe("Returns list of admin users if set to true").optional(), "isBot": z.boolean().describe("Returns list of bot users if set to true").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape