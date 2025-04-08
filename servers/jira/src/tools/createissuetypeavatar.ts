import { z } from "zod"

export const toolName = `createissuetypeavatar`
export const toolDescription = `Load issue type avatar`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuetype/{id}/avatar2`
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
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "id": z.string().describe("The ID of the issue type."),
  "x": z.number().int().describe("The X coordinate of the top-left corner of the crop region.").optional(),
  "y": z.number().int().describe("The Y coordinate of the top-left corner of the crop region.").optional(),
  "size": z.number().int().describe("The length of each side of the crop region.")
}