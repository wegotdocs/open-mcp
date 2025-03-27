import { z } from "zod"

export const toolName = `retrieve_an_ach_transfer`
export const toolDescription = `Retrieve an ACH Transfer`
export const baseUrl = `https://api.increase.com`
export const path = `/ach_transfers/{ach_transfer_id}`
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

export const inputParams = z.object({ "path": z.object({ "ach_transfer_id": z.string().describe("The identifier of the ACH Transfer.") }).optional() }).shape