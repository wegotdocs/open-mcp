import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateworkflowmapping",
  "toolDescription": "Set issue types for workflow in workflow scheme",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/workflowscheme/{id}/workflow",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "workflowName": "workflowName"
    },
    "body": {
      "defaultMapping": "defaultMapping",
      "issueTypes": "issueTypes",
      "updateDraftIfNeeded": "updateDraftIfNeeded",
      "workflow": "workflow"
    }
  },
  inputParamsSchema
}

export default tool