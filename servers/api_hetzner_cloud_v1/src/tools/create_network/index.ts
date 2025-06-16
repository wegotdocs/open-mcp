import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_network",
  "toolDescription": "Create a Network",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/networks",
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
      "expose_routes_to_vswitch": "expose_routes_to_vswitch",
      "ip_range": "ip_range",
      "labels": "labels",
      "name": "name",
      "routes": "routes",
      "subnets": "subnets"
    }
  },
  inputParamsSchema
}

export default tool