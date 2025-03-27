import { z } from "zod"

export const toolName = `put_aliases_v2_trackingid_batch`
export const toolDescription = `Creates multiple aliases for a device`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/aliases/v2/{trackingId}/batch`
export const method = `put`
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

export const inputParams = z.object({ "body": z.object({ "aliases": z.record(z.any()).describe("A map of key-value pairs where the key is the type of the\nalias and the value is an array of `externalId`s.\n") }).optional() }).shape