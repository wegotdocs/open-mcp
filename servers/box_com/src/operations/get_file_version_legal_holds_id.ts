import { z } from "zod"

export const toolName = `get_file_version_legal_holds_id`
export const toolDescription = `Get file version legal hold`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/file_version_legal_holds/{file_version_legal_hold_id}`
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

export const inputParams = z.object({ "path": z.object({ "file_version_legal_hold_id": z.string().describe("The ID of the file version legal hold") }).optional() }).shape