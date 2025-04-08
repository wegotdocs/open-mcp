import { z } from "zod"

export const toolName = `assignalias`
export const toolDescription = `Assign an Alias`
export const baseUrl = `https://api.vercel.com`
export const path = `/v2/deployments/{id}/aliases`
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
export const keys = {
  "query": [
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "alias",
    "redirect"
  ]
}
export const flatMap = {}

export const inputParams = {
  "id": z.string().describe("The ID of the deployment the aliases should be listed for"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "alias": z.string().describe("The alias we want to assign to the deployment defined in the URL").optional(),
  "redirect": z.string().nullable().describe("The redirect property will take precedence over the deployment id from the URL and consists of a hostname (like test.com) to which the alias should redirect using status code 307").optional()
}