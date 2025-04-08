import { z } from "zod"

export const toolName = `deleteworkflowtransitionruleconfigurations`
export const toolDescription = `Delete workflow transition rule configurations`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflow/rule/config/delete`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "workflows"
  ]
}
export const flatMap = {}

export const inputParams = {
  "workflows": z.array(z.object({ "workflowId": z.object({ "draft": z.boolean().describe("Whether the workflow is in the draft state."), "name": z.string().describe("The name of the workflow.") }).strict().describe("Properties that identify a workflow."), "workflowRuleIds": z.array(z.string().describe("The list of connect workflow rule IDs.")).describe("The list of connect workflow rule IDs.") }).strict().describe("Details about a workflow configuration update request.")).describe("The list of workflows with transition rules to delete.")
}