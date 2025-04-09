export { inputParams } from "./schema/root.js"

export const toolName = `migrationresource_workflowrulesearch_post`
export const toolDescription = `Get workflow transition rule configurations`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/atlassian-connect/1/migration/workflow/rule/search`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [
    "Atlassian-Transfer-Id"
  ],
  "path": [],
  "cookie": [],
  "body": [
    "expand",
    "ruleIds",
    "workflowEntityId"
  ]
}
export const flatMap = {}