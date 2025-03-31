import { z } from "zod"

export const toolName = `setdashboarditemproperty`
export const toolDescription = `Set dashboard item property`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}`
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

export const inputParams = z.object({ "p_dashboardId": z.string().describe("The ID of the dashboard."), "p_itemId": z.string().describe("The ID of the dashboard item."), "p_propertyKey": z.string().describe("The key of the dashboard item property. The maximum length is 255 characters. For dashboard items with a spec URI and no complete module key, if the provided propertyKey is equal to \"config\", the request body's JSON must be an object with all keys and values as strings.") }).shape