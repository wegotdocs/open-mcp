import { z } from "zod"

export const toolName = `addplugin`
export const toolDescription = `Install a plugin`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/plugins/install`
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

export const inputParams = z.object({ "body": z.object({ "npmName": z.string() }).strict().optional() }).shape