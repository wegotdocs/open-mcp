import { z } from "zod"

export const toolName = `get_v4_layers_asharvested`
export const toolDescription = `Retrieve a list of harvest activities`
export const baseUrl = `https://platform.climate.com`
export const path = `/v4/layers/asHarvested`
export const method = `get`
export const security = [
  {
    "key": "X-Api-Key",
    "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "X-Api-Key"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "header": z.object({ "Accept": z.string().describe("Must be either \\*/* or application/octet-stream,application/json"), "X-Next-Token": z.string().describe("Opaque string which allows for fetching the next batch of results.  Can be used to poll for changes.").optional(), "X-Limit": z.number().int().gte(1).lte(100).describe("Max number of results to return per batch.  Must be between 1 and 100 inclusive.  Defaults to 100.").optional() }).optional(), "query": z.object({ "resourceOwnerId": z.string().uuid().describe("Optional unique identifier of the resource owner.  If resourceOwnerId is not specified, it defaults to the x-authenticated-user-uuid.").optional(), "occurredAfter": z.string().datetime({ offset: true }).describe("Optional start time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with an end time at or after (inclusive) the specified time will match this filter. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.").optional(), "occurredBefore": z.string().datetime({ offset: true }).describe("Optional end time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a start time at or before (inclusive) the specified time. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.").optional(), "updatedAfter": z.string().datetime({ offset: true }).describe("Optional updated time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a modification time at or after (inclusive) the specified time.").optional() }).optional() }).shape