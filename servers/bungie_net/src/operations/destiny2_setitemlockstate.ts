import { z } from "zod"

export const toolName = `destiny2_setitemlockstate`
export const toolDescription = `Set the Lock State for an instanced item. You must have a valid Destiny Account.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Destiny2/Actions/Items/SetLockState/`
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

export const inputParams = z.object({}).shape