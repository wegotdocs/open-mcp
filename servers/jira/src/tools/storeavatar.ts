import { z } from "zod"

export const toolName = `storeavatar`
export const toolDescription = `Load avatar`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/universal_avatar/type/{type}/owner/{entityId}`
export const method = `post`
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
    "x",
    "y",
    "size"
  ],
  "header": [],
  "path": [
    "type",
    "entityId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "type": z.enum(["project","issuetype","priority"]).describe("The avatar type."),
  "entityId": z.string().describe("The ID of the item the avatar is associated with."),
  "x": z.number().int().describe("The X coordinate of the top-left corner of the crop region.").optional(),
  "y": z.number().int().describe("The Y coordinate of the top-left corner of the crop region.").optional(),
  "size": z.number().int().describe("The length of each side of the crop region.")
}