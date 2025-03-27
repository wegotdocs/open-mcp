import { z } from "zod"

export const toolName = `retrieve_an_inbound_wire_drawdown_request`
export const toolDescription = `Retrieve an Inbound Wire Drawdown Request`
export const baseUrl = `https://api.increase.com`
export const path = `/inbound_wire_drawdown_requests/{inbound_wire_drawdown_request_id}`
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

export const inputParams = z.object({ "path": z.object({ "inbound_wire_drawdown_request_id": z.string().describe("The identifier of the Inbound Wire Drawdown Request to retrieve.") }).optional() }).shape