import { z } from "zod"

export const toolName = `get_files_upload_sessions_id_parts`
export const toolDescription = `List parts`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/files/upload_sessions/{upload_session_id}/parts`
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

export const inputParams = z.object({ "path": z.object({ "upload_session_id": z.string().describe("The ID of the upload session.") }).optional(), "query": z.object({ "offset": z.number().int().describe("The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response."), "limit": z.number().int().lte(1000).describe("The maximum number of items to return per page.").optional() }).optional() }).shape