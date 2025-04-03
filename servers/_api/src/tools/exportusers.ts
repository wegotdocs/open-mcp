import { z } from "zod"

export const toolName = `exportusers`
export const toolDescription = `Export users in a team in CSV format`
export const baseUrl = `/api`
export const path = `/v1/users/export`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "team"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "team": z.string().describe("Name of the team to under which the users are imported to") }).shape