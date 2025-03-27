import { z } from "zod"

export const toolName = `get_files_id_versions`
export const toolDescription = `List all file versions`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/files/{file_id}/versions`
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

export const inputParams = z.object({ "path": z.object({ "file_id": z.string().describe("The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.") }).optional(), "query": z.object({ "fields": z.array(z.string()).describe("A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.").optional(), "limit": z.number().int().lte(1000).describe("The maximum number of items to return per page.").optional(), "offset": z.number().int().describe("The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.") }).optional() }).shape