import { z } from "zod"

export const toolName = `getteamstyles`
export const toolDescription = `Get team styles`
export const baseUrl = `https://api.figma.com`
export const path = `/v1/teams/{team_id}/styles`
export const method = `get`
export const security = [
  {
    "key": "X-Figma-Token",
    "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "X_FIGMA_TOKEN",
    "schemeType": "apiKey",
    "schemeName": "X-Figma-Token"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [
    "page_size",
    "after",
    "before"
  ],
  "header": [],
  "path": [
    "team_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "team_id": z.string().describe("Id of the team to list styles from."), "page_size": z.number().describe("Number of items to return in a paged list of results. Defaults to 30."), "after": z.number().describe("Cursor indicating which id after which to start retrieving styles for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids.").optional(), "before": z.number().describe("Cursor indicating which id before which to start retrieving styles for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids.").optional() }).shape