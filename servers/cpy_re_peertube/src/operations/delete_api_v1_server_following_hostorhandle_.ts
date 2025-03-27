import { z } from "zod"

export const toolName = `delete_api_v1_server_following_hostorhandle_`
export const toolDescription = `Unfollow an actor (PeerTube instance, channel or account)`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/server/following/{hostOrHandle}`
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

export const inputParams = z.object({ "path": z.object({ "hostOrHandle": z.string().describe("The hostOrHandle to unfollow") }).optional() }).shape