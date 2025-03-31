import { z } from "zod"

export const toolName = `get_a_users_available_devices`
export const toolDescription = `Get Available Devices`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player/devices`
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

export const inputParams = z.object({}).shape