import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_vps_vps_create_project_id_post",
  "toolDescription": "Create new server",
  "baseUrl": "https://api.example.com",
  "path": "/vps/create/{project_id}",
  "method": "post",
  "security": [
    {
      "key": "X-API-Key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
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
      "project_id": "project_id"
    },
    "body": {
      "label": "label",
      "template_name": "template_name",
      "plan_name": "plan_name",
      "location_name": "location_name",
      "name": "name",
      "ssh_key_name": "ssh_key_name",
      "network_id": "network_id",
      "user": "user",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool