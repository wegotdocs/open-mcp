import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrationresource_workflowrulesearch_post",
  "toolDescription": "Get workflow transition rule configurations",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/atlassian-connect/1/migration/workflow/rule/search",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "expand": "expand",
      "ruleIds": "ruleIds",
      "workflowEntityId": "workflowEntityId"
    },
    "header": {
      "Atlassian-Transfer-Id": "Atlassian-Transfer-Id"
    }
  },
  inputParamsSchema
}

export default tool