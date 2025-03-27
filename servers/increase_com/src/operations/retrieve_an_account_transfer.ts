import { z } from "zod"

export const toolName = `retrieve_an_account_transfer`
export const toolDescription = `Retrieve an Account Transfer`
export const baseUrl = `https://api.increase.com`
export const path = `/account_transfers/{account_transfer_id}`
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

export const inputParams = z.object({ "path": z.object({ "account_transfer_id": z.string().describe("The identifier of the Account Transfer.") }).optional() }).shape