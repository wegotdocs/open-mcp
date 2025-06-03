import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_list_with_event_by_type_api_v2_robots_robot_type_get",
  "toolDescription": "Get List With Event By Type",
  "baseUrl": "https://api.example.com",
  "path": "/api/v2/robots/{robot_type}",
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
      "robot_type": "robot_type"
    }
  },
  inputParamsSchema
}

export default tool