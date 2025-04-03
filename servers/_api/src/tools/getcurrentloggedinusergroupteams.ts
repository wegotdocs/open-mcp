import { z } from "zod"

export const toolName = `getcurrentloggedinusergroupteams`
export const toolDescription = `Get group type of teams for current logged in user`
export const baseUrl = `/api`
export const path = `/v1/users/loggedInUser/groupTeams`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({}).shape