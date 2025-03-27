import { z } from "zod"

export const toolName = `delete_files_upload_sessions_id`
export const toolDescription = `Remove upload session`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/files/upload_sessions/{upload_session_id}`
export const method = `delete`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "upload_session_id": z.string().describe("The ID of the upload session.") }).optional() }).shape