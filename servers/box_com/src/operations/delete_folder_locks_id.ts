import { z } from "zod"

export const toolName = `delete_folder_locks_id`
export const toolDescription = `Delete folder lock`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/folder_locks/{folder_lock_id}`
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

export const inputParams = z.object({ "path": z.object({ "folder_lock_id": z.string().describe("The ID of the folder lock.") }).optional() }).shape