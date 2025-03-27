import { z } from "zod"

export const toolName = `post_api_v1_users_me_notifications_read`
export const toolDescription = `Mark notifications as read by their id`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/users/me/notifications/read`
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

export const inputParams = z.object({ "body": z.object({ "ids": z.array(z.number().int()).describe("ids of the notifications to mark as read") }).optional() }).shape