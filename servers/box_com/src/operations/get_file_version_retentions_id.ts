import { z } from "zod"

export const toolName = `get_file_version_retentions_id`
export const toolDescription = `Get retention on file`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/file_version_retentions/{file_version_retention_id}`
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

export const inputParams = z.object({ "path": z.object({ "file_version_retention_id": z.string().describe("The ID of the file version retention") }).optional() }).shape