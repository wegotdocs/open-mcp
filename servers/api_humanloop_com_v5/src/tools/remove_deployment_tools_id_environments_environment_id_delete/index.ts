import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_deployment_tools_id_environments_environment_id_delete",
  "toolDescription": "Remove Deployment",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/tools/{id}/environments/{environment_id}",
  "method": "delete",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id",
      "environment_id": "environment_id"
    }
  },
  inputParamsSchema
}

export default tool