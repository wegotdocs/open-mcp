import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_api_robots_robot_id_put",
  "toolDescription": "Update",
  "baseUrl": "https://api.example.com",
  "path": "/api/robots/{robot_id}",
  "method": "put",
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
    "body": {
      "name": "name",
      "serial_number": "serial_number",
      "robot_type": "robot_type",
      "organization_id": "organization_id",
      "dealers_ids": "dealers_ids",
      "users_ids": "users_ids",
      "software_version": "software_version"
    }
  },
  inputParamsSchema
}

export default tool