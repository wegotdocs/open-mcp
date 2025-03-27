import { z } from "zod"

export const toolName = `get_v4_layers_asharvested_activityid_contents`
export const toolDescription = `Retrieve the raw harvest activity`
export const baseUrl = `https://platform.climate.com`
export const path = `/v4/layers/asHarvested/{activityId}/contents`
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

export const inputParams = z.object({ "header": z.object({ "Accept": z.string().describe("Must be either \\*/* or application/octet-stream,application/json"), "Range": z.string().describe("Byte range `bytes=start-end` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.1). e.g. bytes=0-1048576. Currently only single range value is supported. Both start and end need to be specified, end value should be greater than start and end - start should not be greater than 5MiB.") }).optional(), "path": z.object({ "activityId": z.string().uuid().describe("Unique identifier of the Harvest Activity.") }).optional() }).shape