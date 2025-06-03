import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_by_id_api_robot_routes_route_id_get",
  "toolDescription": "Get By Id",
  "baseUrl": "https://api.example.com",
  "path": "/api/robot_routes/{route_id}",
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
      "route_id": "route_id"
    }
  },
  inputParamsSchema
}

export default tool