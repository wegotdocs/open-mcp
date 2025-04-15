import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createworkflowtransitionproperty",
  "toolDescription": "Create workflow transition property",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/workflow/transitions/{transitionId}/properties",
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
    "path": {
      "transitionId": "transitionId"
    },
    "query": {
      "key": "key",
      "workflowName": "workflowName",
      "workflowMode": "workflowMode"
    },
    "body": {
      "id": "id",
      "key": "b_key",
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool