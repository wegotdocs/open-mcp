import { z } from "zod"

export const toolName = `updatecheck`
export const toolDescription = `Update a check`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/deployments/{deploymentId}/checks/{checkId}`
export const method = `patch`
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
    "deploymentId",
    "checkId"
  ],
  "cookie": [],
  "body": [
    "name",
    "path",
    "status",
    "conclusion",
    "detailsUrl",
    "output",
    "externalId"
  ]
}
export const flatMap = {}

export const inputParams = {
  "deploymentId": z.string().describe("The deployment to update the check for."),
  "checkId": z.string().describe("The check being updated"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "name": z.string().max(100).describe("The name of the check being created").optional(),
  "path": z.string().max(255).describe("Path of the page that is being checked").optional(),
  "status": z.enum(["running","completed"]).describe("The current status of the check").optional(),
  "conclusion": z.enum(["canceled","failed","neutral","succeeded","skipped"]).describe("The result of the check being run").optional(),
  "detailsUrl": z.string().describe("A URL a user may visit to see more information about the check").optional(),
  "output": z.object({ "metrics": z.object({ "FCP": z.object({ "value": z.number().nullable().describe("First Contentful Paint value"), "previousValue": z.number().describe("Previous First Contentful Paint value to display a delta").optional(), "source": z.literal("web-vitals") }), "LCP": z.object({ "value": z.number().nullable().describe("Largest Contentful Paint value"), "previousValue": z.number().describe("Previous Largest Contentful Paint value to display a delta").optional(), "source": z.literal("web-vitals") }), "CLS": z.object({ "value": z.number().nullable().describe("Cumulative Layout Shift value"), "previousValue": z.number().describe("Previous Cumulative Layout Shift value to display a delta").optional(), "source": z.literal("web-vitals") }), "TBT": z.object({ "value": z.number().nullable().describe("Total Blocking Time value"), "previousValue": z.number().describe("Previous Total Blocking Time value to display a delta").optional(), "source": z.literal("web-vitals") }), "virtualExperienceScore": z.object({ "value": z.number().int().gte(0).lte(100).nullable().describe("The calculated Virtual Experience Score value, between 0 and 100"), "previousValue": z.number().int().gte(0).lte(100).describe("A previous Virtual Experience Score value to display a delta, between 0 and 100").optional(), "source": z.literal("web-vitals") }).optional() }).strict().describe("Metrics about the page").optional() }).describe("The results of the check Run").optional(),
  "externalId": z.string().describe("An identifier that can be used as an external reference").optional()
}