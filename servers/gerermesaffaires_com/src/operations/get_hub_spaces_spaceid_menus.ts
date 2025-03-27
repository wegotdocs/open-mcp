import { z } from "zod"

export const toolName = `get_hub_spaces_spaceid_menus`
export const toolDescription = `Returns predefined folders and workbooks of the Hub for the space`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/hub/spaces/{spaceId}/menus`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "spaceId": z.string().describe("Id of the space") }).optional() }).shape