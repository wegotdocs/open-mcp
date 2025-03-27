import { z } from "zod"

export const toolName = `delete_files_id_versions_id`
export const toolDescription = `Remove file version`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/files/{file_id}/versions/{file_version_id}`
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

export const inputParams = z.object({ "path": z.object({ "file_id": z.string().describe("The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`."), "file_version_id": z.string().describe("The ID of the file version") }).optional(), "header": z.object({ "if-match": z.string().describe("Ensures this item hasn't recently changed before\nmaking changes.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `412 Precondition Failed` if it\nhas changed since.").optional() }).optional() }).shape