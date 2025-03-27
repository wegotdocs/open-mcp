import { z } from "zod"

export const toolName = `put_files_upload_sessions_id`
export const toolDescription = `Upload part of file`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/files/upload_sessions/{upload_session_id}`
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

export const inputParams = z.object({ "path": z.object({ "upload_session_id": z.string().describe("The ID of the upload session.") }).optional(), "header": z.object({ "digest": z.string().describe("The [RFC3230][1] message digest of the chunk uploaded.\n\nOnly SHA1 is supported. The SHA1 digest must be base64\nencoded. The format of this header is as\n`sha=BASE64_ENCODED_DIGEST`.\n\nTo get the value for the `SHA` digest, use the\nopenSSL command to encode the file part:\n`openssl sha1 -binary <FILE_PART_NAME> | base64`\n\n[1]: https://tools.ietf.org/html/rfc3230"), "content-range": z.string().describe("The byte range of the chunk.\n\nMust not overlap with the range of a part already\nuploaded this session. Each part’s size must be\nexactly equal in size to the part size specified\nin the upload session that you created.\nOne exception is the last part of the file, as this can be smaller.\n\nWhen providing the value for `content-range`, remember that:\n\n* The lower bound of each part's byte range\n  must be a multiple of the part size.\n* The higher bound must be a multiple of the part size - 1.") }).optional() }).shape