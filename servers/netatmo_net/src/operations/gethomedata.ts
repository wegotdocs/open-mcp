import { z } from "zod"

export const toolName = `gethomedata`
export const toolDescription = `Returns information about users homes and cameras.`
export const baseUrl = `https://api.netatmo.net/api`
export const path = `/gethomedata`
export const method = `get`
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

export const inputParams = z.object({ "query": z.object({ "home_id": z.string().describe("Specify if you're looking for the events of a specific Home.").optional(), "size": z.number().int().describe("Number of events to retrieve. Default is `30`.").optional() }).optional() }).shape