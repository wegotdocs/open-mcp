import { z } from "zod"

export const toolName = `putmirroredvideo`
export const toolDescription = `Mirror a video`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/server/redundancy/videos`
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

export const inputParams = z.object({ "body": z.object({ "videoId": z.string() }).optional() }).shape