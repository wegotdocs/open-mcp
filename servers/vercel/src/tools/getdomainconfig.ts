import { z } from "zod"

export const toolName = `getdomainconfig`
export const toolDescription = `Get a Domain's configuration`
export const baseUrl = `https://api.vercel.com`
export const path = `/v6/domains/{domain}/config`
export const method = `get`
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
    "strict",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "domain"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "domain": z.string().describe("The name of the domain."), "strict": z.enum(["true","false"]).describe("When true, the response will only include the nameservers assigned directly to the specified domain. When false and there are no nameservers assigned directly to the specified domain, the response will include the nameservers of the domain's parent zone.").optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape