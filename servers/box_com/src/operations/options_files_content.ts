import { z } from "zod"

export const toolName = `options_files_content`
export const toolDescription = `Preflight check before upload`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/files/content`
export const method = `options`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "body": z.object({ "name": z.string().describe("The name for the file").optional(), "parent": z.string().optional(), "size": z.number().int().describe("The size of the file in bytes").optional() }).optional() }).shape