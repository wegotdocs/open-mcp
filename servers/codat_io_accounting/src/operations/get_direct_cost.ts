import { z } from "zod"

export const toolName = `get_direct_cost`
export const toolDescription = `Get direct cost`
export const baseUrl = `https://api.codat.io`
export const path = `/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]

export const inputParams = z.object({}).shape