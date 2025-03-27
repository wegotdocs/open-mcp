import { z } from "zod"

export const toolName = `retrieve_a_real_time_decision`
export const toolDescription = `Retrieve a Real-Time Decision`
export const baseUrl = `https://api.increase.com`
export const path = `/real_time_decisions/{real_time_decision_id}`
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

export const inputParams = z.object({ "path": z.object({ "real_time_decision_id": z.string().describe("The identifier of the Real-Time Decision.") }).optional() }).shape