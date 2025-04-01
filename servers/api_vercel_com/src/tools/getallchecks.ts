import { z } from "zod"

export const toolName = `getallchecks`
export const toolDescription = `Retrieve a list of all checks`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/deployments/{deploymentId}/checks`
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
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "deploymentId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "deploymentId": z.string().describe("The deployment to get all checks for"), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape