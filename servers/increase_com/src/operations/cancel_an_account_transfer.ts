import { z } from "zod"

export const toolName = `cancel_an_account_transfer`
export const toolDescription = `Cancel an Account Transfer`
export const baseUrl = `https://api.increase.com`
export const path = `/account_transfers/{account_transfer_id}/cancel`
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

export const inputParams = z.object({ "path": z.object({ "account_transfer_id": z.string().describe("The identifier of the pending Account Transfer to cancel.") }).optional() }).shape