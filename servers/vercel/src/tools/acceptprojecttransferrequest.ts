import { z } from "zod"

export const toolName = `acceptprojecttransferrequest`
export const toolDescription = `Accept project transfer request`
export const baseUrl = `https://api.vercel.com`
export const path = `/projects/transfer-request/{code}`
export const method = `put`
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
    "code"
  ],
  "cookie": [],
  "body": [
    "newProjectName",
    "paidFeatures"
  ]
}
export const flatMap = {}

export const inputParams = {
  "code": z.string().describe("The code of the project transfer request."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "newProjectName": z.string().max(100).describe("The desired name for the project").optional(),
  "paidFeatures": z.object({ "concurrentBuilds": z.number().int().nullable().optional(), "passwordProtection": z.boolean().nullable().optional(), "previewDeploymentSuffix": z.boolean().nullable().optional() }).strict().optional()
}