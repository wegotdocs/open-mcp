import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getworkflowtransitionproperties",
  "toolDescription": "Get workflow transition properties",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/workflow/transitions/{transitionId}/properties",
  "method": "get",
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
      "includeReservedKeys": "includeReservedKeys",
      "key": "key",
      "workflowName": "workflowName",
      "workflowMode": "workflowMode"
    }
  },
  inputParamsSchema
}

export default tool