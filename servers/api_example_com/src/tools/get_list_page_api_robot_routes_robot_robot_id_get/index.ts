import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_list_page_api_robot_routes_robot_robot_id_get",
  "toolDescription": "Get List Page",
  "baseUrl": "https://api.example.com",
  "path": "/api/robot_routes/robot/{robot_id}",
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