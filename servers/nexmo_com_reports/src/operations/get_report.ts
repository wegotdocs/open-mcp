import { z } from "zod"

export const toolName = `get_report`
export const toolDescription = `Get status of report`
export const baseUrl = `https://api.nexmo.com`
export const path = `/v2/reports/{report_id}`
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

export const inputParams = z.object({ "path": z.object({ "report_id": z.string().describe("UUID of the report request (`request_id` in response).") }).optional() }).shape