import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "set_deployment_datasets_id_environments_environment_id_post",
  "toolDescription": "Deploy Dataset",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/datasets/{id}/environments/{environment_id}",
  "method": "post",
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
    },
    "query": {
      "version_id": "version_id"
    }
  },
  inputParamsSchema
}

export default tool