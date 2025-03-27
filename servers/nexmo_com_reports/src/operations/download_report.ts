import { z } from "zod"

export const toolName = `download_report`
export const toolDescription = `Get report data`
export const baseUrl = `https://api.nexmo.com`
export const path = `/v3/media/{file_id}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "path": z.object({ "file_id": z.string().describe("UUID of the file.") }).optional() }).shape