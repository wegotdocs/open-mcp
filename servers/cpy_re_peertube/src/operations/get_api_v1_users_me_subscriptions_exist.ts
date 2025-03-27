import { z } from "zod"

export const toolName = `get_api_v1_users_me_subscriptions_exist`
export const toolDescription = `Get if subscriptions exist for my user`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/users/me/subscriptions/exist`
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

export const inputParams = z.object({ "query": z.object({ "uris": z.array(z.string().url()).describe("list of uris to check if each is part of the user subscriptions") }).optional() }).shape