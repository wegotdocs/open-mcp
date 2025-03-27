import { z } from "zod"

export const toolName = `getnextevents`
export const toolDescription = `Returns previous events.`
export const baseUrl = `https://api.netatmo.net/api`
export const path = `/getnextevents`
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

export const inputParams = z.object({ "query": z.object({ "home_id": z.string().describe("ID of the Home you're interested in"), "event_id": z.string().describe("Your request will retrieve events occured before this one"), "size": z.number().int().describe("Number of events to retrieve. Default is 30.").optional() }).optional() }).shape