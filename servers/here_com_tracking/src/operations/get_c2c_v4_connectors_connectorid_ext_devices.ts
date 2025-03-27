import { z } from "zod"

export const toolName = `get_c2c_v4_connectors_connectorid_ext_devices`
export const toolDescription = `Gets all external devices under a connector`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/c2c/v4/connectors/{connectorId}/ext-devices`
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

export const inputParams = z.object({ "query": z.object({ "pageToken": z.string().describe("A token from the previously returned response to retrieve the specified page.").optional(), "limit": z.number().int().gte(1).lte(100).describe("The number of items to return per page") }).optional(), "header": z.object({ "X-Request-Id": z.string().uuid().describe("ID used for correlating requests within HERE Tracking. Used for logging and error reporting.\n\nMust be a valid UUIDv4.\n").optional() }).optional(), "path": z.object({ "connectorId": z.string().min(1).max(50).describe("Identifier of the connector") }).optional() }).shape