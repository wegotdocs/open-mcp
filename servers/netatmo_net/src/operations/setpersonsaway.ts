import { z } from "zod"

export const toolName = `setpersonsaway`
export const toolDescription = `Sets a person as 'Away' or the Home as 'Empty'. The event will be added to the user’s timeline.`
export const baseUrl = `https://api.netatmo.net/api`
export const path = `/setpersonsaway`
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

export const inputParams = z.object({ "query": z.object({ "home_id": z.string().describe("ID of the Home you're interested in"), "person_id": z.string().describe("If a person_id is specified, that person will be set as 'Away'. If no person_id is specified, the Home will be set as 'Empty'.").optional() }).optional() }).shape