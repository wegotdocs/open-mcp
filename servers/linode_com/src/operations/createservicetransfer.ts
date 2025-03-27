import { z } from "zod"

export const toolName = `createservicetransfer`
export const toolDescription = `Service Transfer Create`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/account/service-transfers`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "body": z.object({ "entities": z.object({ "linodes": z.array(z.number().int()).describe("An array containing the IDs of each of the Linodes included in this transfer.\n").optional() }).describe("A collection of the services to include in this transfer request, separated by type.\n") }).optional() }).shape