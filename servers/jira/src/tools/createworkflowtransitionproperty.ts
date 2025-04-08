import { z } from "zod"

export const toolName = `createworkflowtransitionproperty`
export const toolDescription = `Create workflow transition property`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflow/transitions/{transitionId}/properties`
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
export const keys = {
  "query": [
    "key",
    "workflowName",
    "workflowMode"
  ],
  "header": [],
  "path": [
    "transitionId"
  ],
  "cookie": [],
  "body": [
    "id",
    "b_key",
    "value"
  ]
}
export const flatMap = {
  "b_key": "key"
}

export const inputParams = {
  "transitionId": z.number().int().describe("The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition."),
  "key": z.string().describe("The key of the property being added, also known as the name of the property. Set this to the same value as the `key` defined in the request body."),
  "workflowName": z.string().describe("The name of the workflow that the transition belongs to."),
  "workflowMode": z.enum(["live","draft"]).describe("The workflow status. Set to *live* for inactive workflows or *draft* for draft workflows. Active workflows cannot be edited.").optional(),
  "id": z.string().describe("The ID of the transition property.").readonly().optional(),
  "b_key": z.string().describe("The key of the transition property. Also known as the name of the transition property.").readonly().optional(),
  "value": z.string().describe("The value of the transition property.")
}