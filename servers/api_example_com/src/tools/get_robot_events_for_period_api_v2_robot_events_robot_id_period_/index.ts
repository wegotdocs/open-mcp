import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_robot_events_for_period_api_v2_robot_events_robot_id_period_",
  "toolDescription": "Get Robot Events For Period",
  "baseUrl": "https://api.example.com",
  "path": "/api/v2/robot_events/{robot_id}/period",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "robot_id": "robot_id"
    },
    "query": {
      "from_date": "from_date",
      "to_date": "to_date"
    }
  },
  inputParamsSchema
}

export default tool