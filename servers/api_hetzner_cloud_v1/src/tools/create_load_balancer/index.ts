import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_load_balancer",
  "toolDescription": "Create a Load Balancer",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/load_balancers",
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
      "algorithm": "algorithm",
      "labels": "labels",
      "load_balancer_type": "load_balancer_type",
      "location": "location",
      "name": "name",
      "network": "network",
      "network_zone": "network_zone",
      "public_interface": "public_interface",
      "services": "services",
      "targets": "targets"
    }
  },
  inputParamsSchema
}

export default tool