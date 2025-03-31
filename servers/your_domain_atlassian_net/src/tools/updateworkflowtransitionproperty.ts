import { z } from "zod"

export const toolName = `updateworkflowtransitionproperty`
export const toolDescription = `Update workflow transition property`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflow/transitions/{transitionId}/properties`
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

export const inputParams = z.object({ "p_transitionId": z.number().int().describe("The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition."), "q_key": z.string().describe("The key of the property being updated, also known as the name of the property. Set this to the same value as the `key` defined in the request body."), "q_workflowName": z.string().describe("The name of the workflow that the transition belongs to."), "q_workflowMode": z.enum(["live","draft"]).describe("The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited.").optional(), "b_id": z.string().describe("The ID of the transition property.").readonly().optional(), "b_key": z.string().describe("The key of the transition property. Also known as the name of the transition property.").readonly().optional(), "b_value": z.string().describe("The value of the transition property.") }).shape