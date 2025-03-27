import { z } from "zod"

export const toolName = `get_folders_id_collaborations`
export const toolDescription = `List folder collaborations`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/folders/{folder_id}/collaborations`
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

export const inputParams = z.object({ "path": z.object({ "folder_id": z.string().describe("The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.") }).optional(), "query": z.object({ "fields": z.array(z.string()).describe("A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.").optional() }).optional() }).shape