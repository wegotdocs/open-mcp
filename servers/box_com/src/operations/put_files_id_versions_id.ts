import { z } from "zod"

export const toolName = `put_files_id_versions_id`
export const toolDescription = `Restore file version`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/files/{file_id}/versions/{file_version_id}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "file_id": z.string().describe("The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`."), "file_version_id": z.string().describe("The ID of the file version") }).optional(), "body": z.object({ "trashed_at": z.string().describe("Set this to `null` to clear\nthe date and restore the file.").optional() }).describe("The file version to be\nrestored").optional() }).shape