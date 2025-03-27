import { z } from "zod"

export const toolName = `post_files_id_copy`
export const toolDescription = `Copy file`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/files/{file_id}/copy`
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

export const inputParams = z.object({ "path": z.object({ "file_id": z.string().describe("The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.") }).optional(), "query": z.object({ "fields": z.array(z.string()).describe("A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.").optional() }).optional(), "body": z.object({ "name": z.string().max(255).describe("An optional new name for the copied file.\n\nThere are some restrictions to the file name. Names containing\nnon-printable ASCII characters, forward and backward slashes\n(`/`, `\\`), and protected names like `.` and `..` are\nautomatically sanitized by removing the non-allowed\ncharacters.").optional(), "parent": z.object({ "id": z.string().describe("The ID of folder to copy the file to.") }).describe("The destination folder to copy the file to."), "version": z.string().describe("An optional ID of the specific file version to copy.").optional() }).optional() }).shape