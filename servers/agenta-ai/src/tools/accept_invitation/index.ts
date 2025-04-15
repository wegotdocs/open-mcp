import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accept_invitation",
  "toolDescription": "Accept Organization Invitation",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/organizations/{org_id}/workspaces/{workspace_id}/invite/accept",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "org_id": "org_id",
      "workspace_id": "workspace_id"
    },
    "query": {
      "project_id": "project_id"
    },
    "body": {
      "token": "token",
      "email": "email"
    }
  },
  inputParamsSchema
}

export default tool