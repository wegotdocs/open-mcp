import { z } from "zod"

export const toolName = `delete_api_v1_users_me_history_videos_videoid_`
export const toolDescription = `Delete history element`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/users/me/history/videos/{videoId}`
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

export const inputParams = z.object({ "path": z.object({ "videoId": z.number().int().gte(1).describe("object id for the video") }).optional() }).shape