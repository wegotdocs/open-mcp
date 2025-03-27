import { z } from "zod"

export const toolName = `get_spaces_id_groups`
export const toolDescription = `Returns list of groups`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/spaces/{id}/groups`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space") }).optional(), "query": z.object({ "Name": z.string().describe("Name of the groups").optional() }).optional() }).shape