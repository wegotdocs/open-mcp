import { z } from "zod"

export const toolName = `post_profile`
export const toolDescription = `create infos of profile`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/profile`
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

export const inputParams = z.object({ "body": z.string().optional() }).shape