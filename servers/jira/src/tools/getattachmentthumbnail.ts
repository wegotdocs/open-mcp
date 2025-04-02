import { z } from "zod"

export const toolName = `getattachmentthumbnail`
export const toolDescription = `Get attachment thumbnail`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/attachment/thumbnail/{id}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [
    "redirect",
    "fallbackToDefault",
    "width",
    "height"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().describe("The ID of the attachment."), "redirect": z.boolean().describe("Whether a redirect is provided for the attachment download. Clients that do not automatically follow redirects can set this to `false` to avoid making multiple requests to download the attachment."), "fallbackToDefault": z.boolean().describe("Whether a default thumbnail is returned when the requested thumbnail is not found."), "width": z.number().int().describe("The maximum width to scale the thumbnail to.").optional(), "height": z.number().int().describe("The maximum height to scale the thumbnail to.").optional() }).shape