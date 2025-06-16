import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getworkspaceaccess",
  "toolDescription": "Get access allowances for a particular workspace",
  "baseUrl": "https://api.prod.speakeasy.com",
  "path": "/v1/workspace/access",
  "method": "get",
  "security": [
    {
      "key": "x-api-key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    },
    {
      "key": "x-workspace-identifier",
      "value": "<mcp-env-var>X_WORKSPACE_IDENTIFIER</mcp-env-var>",
      "in": "header",
      "envVarName": "X_WORKSPACE_IDENTIFIER"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "genLockId": "genLockId",
      "targetType": "targetType",
      "passive": "passive"
    }
  },
  inputParamsSchema
}

export default tool