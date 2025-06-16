import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createworkspacetoken",
  "toolDescription": "Create a token for a particular workspace",
  "baseUrl": "https://api.prod.speakeasy.com",
  "path": "/v1/workspace/{workspace_id}/tokens",
  "method": "post",
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
    "body": {
      "id": "id",
      "name": "name",
      "workspace_id": "workspace_id",
      "alg": "alg",
      "key": "key",
      "last_used": "last_used",
      "created_at": "created_at",
      "created_by": "created_by",
      "created_by_name": "created_by_name",
      "created_by_photo_url": "created_by_photo_url",
      "email": "email"
    }
  },
  inputParamsSchema
}

export default tool