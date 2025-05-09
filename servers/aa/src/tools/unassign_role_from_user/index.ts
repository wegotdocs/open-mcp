import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "unassign_role_from_user",
  "toolDescription": "Unassign Role From User",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/workspaces/{workspace_id}/roles",
  "method": "delete",
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
      "workspace_id": "workspace_id"
    },
    "query": {
      "email": "email",
      "org_id": "org_id",
      "role": "role"
    }
  },
  inputParamsSchema
}

export default tool