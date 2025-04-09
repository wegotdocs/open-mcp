export { inputParams } from "./schema/root.js"

export const toolName = `buydomain`
export const toolDescription = `Purchase a domain`
export const baseUrl = `https://api.vercel.com`
export const path = `/v5/domains/buy`
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
  "path": [],
  "cookie": [],
  "body": [
    "name",
    "expectedPrice",
    "renew",
    "country",
    "orgName",
    "firstName",
    "lastName",
    "address1",
    "city",
    "state",
    "postalCode",
    "phone",
    "email"
  ]
}
export const flatMap = {}