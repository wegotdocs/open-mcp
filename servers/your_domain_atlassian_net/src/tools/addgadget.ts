import { z } from "zod"

export const toolName = `addgadget`
export const toolDescription = `Add gadget to dashboard`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/dashboard/{dashboardId}/gadget`
export const method = `post`
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

export const inputParams = z.object({ "p_dashboardId": z.number().int().describe("The ID of the dashboard."), "b_color": z.string().describe("The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`.").optional(), "b_ignoreUriAndModuleKeyValidation": z.boolean().describe("Whether to ignore the validation of module key and URI. For example, when a gadget is created that is a part of an application that isn't installed.").optional(), "b_moduleKey": z.string().describe("The module key of the gadget type. Can't be provided with `uri`.").optional(), "b_position": z.string().optional(), "b_title": z.string().describe("The title of the gadget.").optional(), "b_uri": z.string().describe("The URI of the gadget type. Can't be provided with `moduleKey`.").optional() }).shape