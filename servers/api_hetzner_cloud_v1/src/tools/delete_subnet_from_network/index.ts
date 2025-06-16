import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_subnet_from_network",
  "toolDescription": "Delete a subnet from a Network",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/networks/{id}/actions/delete_subnet",
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
      "ip_range": "ip_range"
    }
  },
  inputParamsSchema
}

export default tool