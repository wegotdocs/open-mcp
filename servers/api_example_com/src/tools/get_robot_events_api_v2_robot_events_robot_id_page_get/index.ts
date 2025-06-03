import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_robot_events_api_v2_robot_events_robot_id_page_get",
  "toolDescription": "Get Robot Events",
  "baseUrl": "https://api.example.com",
  "path": "/api/v2/robot_events/{robot_id}/page",
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
      "page": "page",
      "page_size": "page_size"
    }
  },
  inputParamsSchema
}

export default tool