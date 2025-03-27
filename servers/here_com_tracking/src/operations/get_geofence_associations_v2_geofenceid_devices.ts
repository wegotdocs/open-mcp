import { z } from "zod"

export const toolName = `get_geofence_associations_v2_geofenceid_devices`
export const toolDescription = `Gets all devices associated with a geofence`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/geofence-associations/v2/{geofenceId}/devices`
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

export const inputParams = z.object({ "header": z.object({ "X-Request-Id": z.string().uuid().describe("ID used for correlating requests within HERE Tracking. Used for logging and error reporting.\n\nMust be a valid UUIDv4.\n").optional() }).optional(), "path": z.object({ "geofenceId": z.string().uuid().describe("Geofence ID") }).optional(), "query": z.object({ "pageToken": z.string().describe("A token from the previously returned response to retrieve the specified page.").optional(), "count": z.number().int().gte(1).lte(100).describe("The number of items to return per page.") }).optional() }).shape