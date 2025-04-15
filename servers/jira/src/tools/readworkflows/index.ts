import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "readworkflows",
  "toolDescription": "Bulk get workflows",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/workflows",
  "method": "post",
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
    "query": {
      "expand": "expand",
      "useApprovalConfiguration": "useApprovalConfiguration"
    },
    "body": {
      "projectAndIssueTypes": "projectAndIssueTypes",
      "workflowIds": "workflowIds",
      "workflowNames": "workflowNames"
    }
  },
  inputParamsSchema
}

export default tool