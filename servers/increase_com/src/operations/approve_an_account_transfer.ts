import { z } from "zod"

export const toolName = `approve_an_account_transfer`
export const toolDescription = `Approve an Account Transfer`
export const baseUrl = `https://api.increase.com`
export const path = `/account_transfers/{account_transfer_id}/approve`
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

export const inputParams = z.object({ "path": z.object({ "account_transfer_id": z.string().describe("The identifier of the Account Transfer to approve.") }).optional() }).shape