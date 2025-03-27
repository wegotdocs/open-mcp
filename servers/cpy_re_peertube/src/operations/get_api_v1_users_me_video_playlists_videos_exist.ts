import { z } from "zod"

export const toolName = `get_api_v1_users_me_video_playlists_videos_exist`
export const toolDescription = `Check video exists in my playlists`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/users/me/video-playlists/videos-exist`
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

export const inputParams = z.object({ "query": z.object({ "videoIds": z.array(z.number().int().gte(1).describe("object id for the video")).describe("The video ids to check") }).optional() }).shape