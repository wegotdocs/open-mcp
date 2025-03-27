import { z } from "zod"

export const toolName = `mail_a_sandbox_check_transfer`
export const toolDescription = `Mail a Sandbox Check Transfer`
export const baseUrl = `https://api.increase.com`
export const path = `/simulations/check_transfers/{check_transfer_id}/mail`
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

export const inputParams = z.object({ "path": z.object({ "check_transfer_id": z.string().describe("The identifier of the Check Transfer you wish to mail.") }).optional() }).shape