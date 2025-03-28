import { z } from "zod"

export const toolName = `redeem_code_me_vip_post`
export const toolDescription = `Redeem Code`
export const baseUrl = `https://api.example.com`
export const path = `/me/vip`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "body": z.object({ "vip_code": z.string() }).optional() }).shape