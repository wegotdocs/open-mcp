import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_primary_ip",
  "toolDescription": "Create a Primary IP",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/primary_ips",
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
    "body": {
      "assignee_id": "assignee_id",
      "assignee_type": "assignee_type",
      "auto_delete": "auto_delete",
      "datacenter": "datacenter",
      "labels": "labels",
      "name": "name",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool