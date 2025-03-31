import { z } from "zod"

export const toolName = `updategadget`
export const toolDescription = `Update gadget on dashboard`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/dashboard/{dashboardId}/gadget/{gadgetId}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "p_dashboardId": z.number().int().describe("The ID of the dashboard."), "p_gadgetId": z.number().int().describe("The ID of the gadget."), "b_color": z.string().describe("The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`.").optional(), "b_position": z.string().optional(), "b_title": z.string().describe("The title of the gadget.").optional() }).shape