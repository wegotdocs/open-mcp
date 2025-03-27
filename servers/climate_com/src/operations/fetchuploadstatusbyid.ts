import { z } from "zod"

export const toolName = `fetchuploadstatusbyid`
export const toolDescription = `Retrieve Upload status`
export const baseUrl = `https://platform.climate.com`
export const path = `/v4/uploads/{uploadId}/status`
export const method = `get`
export const security = [
  {
    "key": "X-Api-Key",
    "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "X-Api-Key"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "uploadId": z.string().uuid().describe("Unique identifier of an Upload.") }).optional() }).shape