import { z } from "zod"

export const toolName = `post_folder_locks`
export const toolDescription = `Create folder lock`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/folder_locks`
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

export const inputParams = z.object({ "body": z.object({ "folder": z.object({ "id": z.string().describe("The ID of the folder."), "type": z.string().describe("The content type the lock is being applied to. Only `folder`\nis supported.") }).describe("The folder to apply the lock to."), "locked_operations": z.object({ "delete": z.boolean().describe("Whether deleting the folder should be locked."), "move": z.boolean().describe("Whether moving the folder should be locked.") }).describe("The operations to lock for the folder. If `locked_operations` is\nincluded in the request, both `move` and `delete` must also be\nincluded and both set to `true`.").optional() }).optional() }).shape