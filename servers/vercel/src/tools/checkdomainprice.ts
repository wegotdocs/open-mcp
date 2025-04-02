import { z } from "zod"

export const toolName = `checkdomainprice`
export const toolDescription = `Check the price for a domain`
export const baseUrl = `https://api.vercel.com`
export const path = `/v4/domains/price`
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
    "name",
    "type",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string().describe("The name of the domain for which the price needs to be checked."), "type": z.enum(["new","renewal","transfer","redemption"]).describe("In which status of the domain the price needs to be checked.").optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape