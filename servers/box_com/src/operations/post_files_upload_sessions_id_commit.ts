import { z } from "zod"

export const toolName = `post_files_upload_sessions_id_commit`
export const toolDescription = `Commit upload session`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/files/upload_sessions/{upload_session_id}/commit`
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

export const inputParams = z.object({ "path": z.object({ "upload_session_id": z.string().describe("The ID of the upload session.") }).optional(), "header": z.object({ "digest": z.string().describe("The [RFC3230][1] message digest of the whole file.\n\nOnly SHA1 is supported. The SHA1 digest must be Base64\nencoded. The format of this header is as\n`sha=BASE64_ENCODED_DIGEST`.\n\n[1]: https://tools.ietf.org/html/rfc3230"), "if-match": z.string().describe("Ensures this item hasn't recently changed before\nmaking changes.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `412 Precondition Failed` if it\nhas changed since.").optional(), "if-none-match": z.string().describe("Ensures an item is only returned if it has changed.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `304 Not Modified` if the item has not\nchanged since.").optional() }).optional(), "body": z.object({ "parts": z.array(z.string()).describe("The list details for the uploaded parts") }).optional() }).shape