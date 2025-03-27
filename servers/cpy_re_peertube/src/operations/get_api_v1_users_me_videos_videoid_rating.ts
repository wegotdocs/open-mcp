import { z } from "zod"

export const toolName = `get_api_v1_users_me_videos_videoid_rating`
export const toolDescription = `Get rate of my user for a video`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/users/me/videos/{videoId}/rating`
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

export const inputParams = z.object({ "path": z.object({ "videoId": z.number().int().gte(1).describe("object id for the video") }).optional() }).shape