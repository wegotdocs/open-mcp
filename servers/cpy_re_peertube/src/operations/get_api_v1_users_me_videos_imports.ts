import { z } from "zod"

export const toolName = `get_api_v1_users_me_videos_imports`
export const toolDescription = `Get video imports of my user`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/users/me/videos/imports`
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

export const inputParams = z.object({ "query": z.object({ "start": z.number().int().gte(0).describe("Offset used to paginate results").optional(), "count": z.number().int().gte(1).lte(100).describe("Number of items to return"), "sort": z.string().describe("Sort column").optional(), "targetUrl": z.string().describe("Filter on import target URL").optional(), "videoChannelSyncId": z.number().describe("Filter on imports created by a specific channel synchronization").optional(), "search": z.string().describe("Search in video names").optional() }).optional() }).shape