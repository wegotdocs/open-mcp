import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "assign_primary_ip_to_resource",
  "toolDescription": "Assign a Primary IP to a resource",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/primary_ips/{id}/actions/assign",
  "method": "post",
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
      "id": "id"
    },
    "body": {
      "assignee_id": "assignee_id",
      "assignee_type": "assignee_type"
    }
  },
  inputParamsSchema
}

export default tool