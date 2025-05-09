import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_workspace",
  "toolDescription": "Create Workspace",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/organizations/{org_id}/workspaces",
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
      "org_id": "org_id"
    },
    "body": {
      "name": "name",
      "description": "description",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool