import { z } from "zod"

export const toolName = `setpersonshome`
export const toolDescription = `Sets a person as 'At home'.`
export const baseUrl = `https://api.netatmo.net/api`
export const path = `/setpersonshome`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "query": z.object({ "home_id": z.string().describe("ID of the Home you're interested in"), "person_ids": z.string().describe("List of persons IDs") }).optional() }).shape