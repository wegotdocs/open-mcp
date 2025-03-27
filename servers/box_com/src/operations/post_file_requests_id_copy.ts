import { z } from "zod"

export const toolName = `post_file_requests_id_copy`
export const toolDescription = `Copy file request`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/file_requests/{file_request_id}/copy`
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

export const inputParams = z.object({ "path": z.object({ "file_request_id": z.string().describe("The unique identifier that represent a file request.\n\nThe ID for any file request can be determined\nby visiting a file request builder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/filerequest/123`\nthe `file_request_id` is `123`.") }).optional(), "body": z.string().optional() }).shape