import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_subnet_to_network",
  "toolDescription": "Add a subnet to a Network",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/networks/{id}/actions/add_subnet",
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
      "ip_range": "ip_range",
      "network_zone": "network_zone",
      "type": "type",
      "vswitch_id": "vswitch_id"
    }
  },
  inputParamsSchema
}

export default tool