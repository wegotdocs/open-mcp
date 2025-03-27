import { z } from "zod"

export const toolName = `destiny2_setquesttrackedstate`
export const toolDescription = `Set the Tracking State for an instanced item, if that item is a Quest or Bounty. You must have a valid Destiny Account. Yeah, it's an item.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Destiny2/Actions/Items/SetTrackedState/`
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