import { z } from "zod"

export const toolName = `reject_a_sandbox_check_deposit`
export const toolDescription = `Reject a Sandbox Check Deposit`
export const baseUrl = `https://api.increase.com`
export const path = `/simulations/check_deposits/{check_deposit_id}/reject`
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

export const inputParams = z.object({ "path": z.object({ "check_deposit_id": z.string().describe("The identifier of the Check Deposit you wish to reject.") }).optional() }).shape