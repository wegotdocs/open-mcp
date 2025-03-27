import { z } from "zod"

export const toolName = `get_enterprises_id_device_pinners`
export const toolDescription = `List enterprise device pins`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/enterprises/{enterprise_id}/device_pinners`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "enterprise_id": z.string().describe("The ID of the enterprise") }).optional(), "query": z.object({ "marker": z.string().describe("Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.").optional(), "limit": z.number().int().lte(1000).describe("The maximum number of items to return per page.").optional(), "direction": z.enum(["ASC","DESC"]).describe("The direction to sort results in. This can be either in alphabetical ascending\n(`ASC`) or descending (`DESC`) order.").optional() }).optional() }).shape