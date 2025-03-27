import { z } from "zod"

export const toolName = `post_folders`
export const toolDescription = `Create folder`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/folders`
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

export const inputParams = z.object({ "query": z.object({ "fields": z.array(z.string()).describe("A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.").optional() }).optional(), "body": z.object({ "folder_upload_email": z.string().optional(), "name": z.string().min(1).max(255).describe("The name for the new folder.\n\nThere are some restrictions to the file name. Names containing\nnon-printable ASCII characters, forward and backward slashes\n(`/`, `\\`), as well as names with trailing spaces are\nprohibited.\n\nAdditionally, the names `.` and `..` are\nnot allowed either."), "parent": z.object({ "id": z.string().describe("The ID of parent folder") }).describe("The parent folder to create the new folder within."), "sync_state": z.enum(["synced","not_synced","partially_synced"]).describe("Specifies whether a folder should be synced to a\nuser's device or not. This is used by Box Sync\n(discontinued) and is not used by Box Drive.").optional() }).optional() }).shape