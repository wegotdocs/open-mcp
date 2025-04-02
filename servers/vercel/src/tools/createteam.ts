import { z } from "zod"

export const toolName = `createteam`
export const toolDescription = `Create a Team`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/teams`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "slug",
    "name",
    "attribution"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "slug": z.string().max(48).describe("The desired slug for the Team"), "name": z.string().max(256).describe("The desired name for the Team. It will be generated from the provided slug if nothing is provided").optional(), "attribution": z.object({ "sessionReferrer": z.string().describe("Session referrer").optional(), "landingPage": z.string().describe("Session landing page").optional(), "pageBeforeConversionPage": z.string().describe("Referrer to the signup page").optional(), "utm": z.object({ "utmSource": z.string().describe("UTM source").optional(), "utmMedium": z.string().describe("UTM medium").optional(), "utmCampaign": z.string().describe("UTM campaign").optional(), "utmTerm": z.string().describe("UTM term").optional() }).optional() }).describe("Attribution information for the session or current page").optional() }).shape