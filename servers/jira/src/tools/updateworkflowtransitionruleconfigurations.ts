import { z } from "zod"

export const toolName = `updateworkflowtransitionruleconfigurations`
export const toolDescription = `Update workflow transition rule configurations`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflow/rule/config`
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
  "workflows": z.array(z.object({ "conditions": z.array(z.object({ "configuration": z.object({ "disabled": z.boolean().describe("Whether the rule is disabled."), "tag": z.string().max(255).describe("A tag used to filter rules in [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get).").optional(), "value": z.string().describe("Configuration of the rule, as it is stored by the Connect or the Forge app on the rule configuration page.") }).strict().describe("A rule configuration."), "id": z.string().describe("The ID of the transition rule."), "key": z.string().describe("The key of the rule, as defined in the Connect or the Forge app descriptor.").readonly(), "transition": z.string().optional() }).strict().describe("A workflow transition rule.")).describe("The list of conditions within the workflow.").optional(), "postFunctions": z.array(z.object({ "configuration": z.object({ "disabled": z.boolean().describe("Whether the rule is disabled."), "tag": z.string().max(255).describe("A tag used to filter rules in [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get).").optional(), "value": z.string().describe("Configuration of the rule, as it is stored by the Connect or the Forge app on the rule configuration page.") }).strict().describe("A rule configuration."), "id": z.string().describe("The ID of the transition rule."), "key": z.string().describe("The key of the rule, as defined in the Connect or the Forge app descriptor.").readonly(), "transition": z.string().optional() }).strict().describe("A workflow transition rule.")).describe("The list of post functions within the workflow.").optional(), "validators": z.array(z.object({ "configuration": z.object({ "disabled": z.boolean().describe("Whether the rule is disabled."), "tag": z.string().max(255).describe("A tag used to filter rules in [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get).").optional(), "value": z.string().describe("Configuration of the rule, as it is stored by the Connect or the Forge app on the rule configuration page.") }).strict().describe("A rule configuration."), "id": z.string().describe("The ID of the transition rule."), "key": z.string().describe("The key of the rule, as defined in the Connect or the Forge app descriptor.").readonly(), "transition": z.string().optional() }).strict().describe("A workflow transition rule.")).describe("The list of validators within the workflow.").optional(), "workflowId": z.object({ "draft": z.boolean().describe("Whether the workflow is in the draft state."), "name": z.string().describe("The name of the workflow.") }).strict().describe("Properties that identify a workflow.") }).strict().describe("A workflow with transition rules.")).describe("The list of workflows with transition rules to update.")
}