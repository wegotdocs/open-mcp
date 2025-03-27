import { z } from "zod"

export const toolName = `deposit_a_sandbox_check_transfer`
export const toolDescription = `Deposit a Sandbox Check Transfer`
export const baseUrl = `https://api.increase.com`
export const path = `/simulations/check_transfers/{check_transfer_id}/deposit`
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

export const inputParams = z.object({ "path": z.object({ "check_transfer_id": z.string().describe("The identifier of the Check Transfer you wish to mark deposited.") }).optional() }).shape