import { z } from "zod"

export const toolName = `delete_api_v1_server_followers_namewithhost_`
export const toolDescription = `Remove or reject a follower to your server`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/server/followers/{nameWithHost}`
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

export const inputParams = z.object({ "path": z.object({ "nameWithHost": z.string().email().describe("The remote actor handle to remove from your followers") }).optional() }).shape