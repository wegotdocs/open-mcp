import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "assign_role_to_user",
  "toolDescription": "Assign Role To User",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/workspaces/{workspace_id}/roles",
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
      "workspace_id": "workspace_id"
    },
    "body": {
      "email": "email",
      "organization_id": "organization_id",
      "role": "role"
    }
  },
  inputParamsSchema
}

export default tool