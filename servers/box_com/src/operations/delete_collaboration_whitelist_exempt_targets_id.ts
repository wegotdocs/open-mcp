import { z } from "zod"

export const toolName = `delete_collaboration_whitelist_exempt_targets_id`
export const toolDescription = `Remove user from list of users exempt from domain restrictions`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/collaboration_whitelist_exempt_targets/{collaboration_whitelist_exempt_target_id}`
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

export const inputParams = z.object({ "path": z.object({ "collaboration_whitelist_exempt_target_id": z.string().describe("The ID of the exemption to the list.") }).optional() }).shape