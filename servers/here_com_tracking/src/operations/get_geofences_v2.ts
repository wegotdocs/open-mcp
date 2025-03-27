import { z } from "zod"

export const toolName = `get_geofences_v2`
export const toolDescription = `Gets all geofences`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/geofences/v2`
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

export const inputParams = z.object({ "query": z.object({ "pageToken": z.string().describe("A token from the previously returned response to retrieve the specified page.").optional(), "count": z.number().int().gte(1).lte(100).describe("The number of items to return per page."), "floor": z.union([z.object({ "id": z.string().min(1).max(100).describe("ID of the venue, which is associated with the geofence").optional() }), z.literal("null").describe("Null option can be used to query for geofences without a floor property")]).describe("The floor of the indoor geofence").optional(), "type": z.array(z.enum(["circle","polygon","poi"])).describe("Type of a geofence").optional(), "bbox": z.array(z.number().gte(-180).lte(180).describe("Latitude and longitude of Northwest and Southeast corners.")).min(4).max(4).describe("Limit search to geofences intersecting the given bounding box.").optional(), "fields": z.array(z.string()).describe("Field names to filter a result object.\n").optional() }).optional() }).shape