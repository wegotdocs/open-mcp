import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateworkspacedetails",
  "toolDescription": "Update workspace details",
  "baseUrl": "https://api.prod.speakeasy.com",
  "path": "/v1/workspace/{workspace_id}/details",
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
      "created_at": "created_at",
      "id": "id",
      "name": "name",
      "organization_id": "organization_id",
      "slug": "slug",
      "inactive": "inactive",
      "updated_at": "updated_at",
      "verified": "verified"
    }
  },
  inputParamsSchema
}

export default tool