import { z } from "zod"

export const toolName = `getworkflowtransitionproperties`
export const toolDescription = `Get workflow transition properties`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflow/transitions/{transitionId}/properties`
export const method = `get`
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
export const keys = {
  "query": [
    "includeReservedKeys",
    "key",
    "workflowName",
    "workflowMode"
  ],
  "header": [],
  "path": [
    "transitionId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "transitionId": z.number().int().describe("The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition."),
  "includeReservedKeys": z.boolean().describe("Some properties with keys that have the *jira.* prefix are reserved, which means they are not editable. To include these properties in the results, set this parameter to *true*.").optional(),
  "key": z.string().describe("The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned.").optional(),
  "workflowName": z.string().describe("The name of the workflow that the transition belongs to."),
  "workflowMode": z.enum(["live","draft"]).describe("The workflow status. Set to *live* for active and inactive workflows, or *draft* for draft workflows.").optional()
}