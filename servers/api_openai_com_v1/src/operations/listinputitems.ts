import { z } from "zod"

export const toolName = `listinputitems`
export const toolDescription = `Returns a list of input items for a given response.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/responses/{response_id}/input_items`
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

export const inputParams = z.object({ "path": z.object({ "response_id": z.string().describe("The ID of the response to retrieve input items for.") }).optional(), "query": z.object({ "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between\n1 and 100, and the default is 20.\n"), "order": z.enum(["asc","desc"]).describe("The order to return the input items in. Default is `asc`.\n- `asc`: Return the input items in ascending order.\n- `desc`: Return the input items in descending order.\n").optional(), "after": z.string().describe("An item ID to list items after, used in pagination.\n").optional(), "before": z.string().describe("An item ID to list items before, used in pagination.\n").optional() }).optional() }).shape