import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_by_id_api_robot_configs_config_id_get",
  "toolDescription": "Get By Id",
  "baseUrl": "https://api.example.com",
  "path": "/api/robot_configs/{config_id}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "config_id": "config_id"
    }
  },
  inputParamsSchema
}

export default tool