import { z } from "zod"

export const toolName = `post_files_id_upload_sessions`
export const toolDescription = `Create upload session for existing file`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/files/{file_id}/upload_sessions`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "file_id": z.string().describe("The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.") }).optional(), "body": z.object({ "file_name": z.string().describe("The optional new name of new file").optional(), "file_size": z.number().int().describe("The total number of bytes of the file to be uploaded") }).optional() }).shape