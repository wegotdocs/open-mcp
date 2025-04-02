import { z } from "zod"

export const toolName = `createrecord`
export const toolDescription = `Create a DNS record`
export const baseUrl = `https://api.vercel.com`
export const path = `/v2/domains/{domain}/records`
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
    "domain"
  ],
  "cookie": [],
  "body": [
    "type"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "domain": z.string().describe("The domain used to create the DNS record."), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "type": z.enum(["A","AAAA","ALIAS","CAA","CNAME","HTTPS","MX","SRV","TXT","NS"]).describe("The type of record, it could be one of the valid DNS records.").optional() }).shape