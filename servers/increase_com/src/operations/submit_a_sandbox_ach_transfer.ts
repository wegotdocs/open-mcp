import { z } from "zod"

export const toolName = `submit_a_sandbox_ach_transfer`
export const toolDescription = `Submit a Sandbox ACH Transfer`
export const baseUrl = `https://api.increase.com`
export const path = `/simulations/ach_transfers/{ach_transfer_id}/submit`
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

export const inputParams = z.object({ "path": z.object({ "ach_transfer_id": z.string().describe("The identifier of the ACH Transfer you wish to submit.") }).optional() }).shape