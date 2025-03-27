import { z } from "zod"

export const toolName = `delete_aliases_v2_trackingid_type_`
export const toolDescription = `Deletes all aliases of a specified type for a device`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/aliases/v2/{trackingId}/{type}`
export const method = `delete`
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

export const inputParams = z.object({ "header": z.object({ "x-confirm": z.literal("true").describe("A safety measure that prevents one from accidentally deleting data.\n\nTo confirm that all entries should be deleted, set the value to `true`.\n") }).optional() }).shape