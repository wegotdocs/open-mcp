import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_route_to_network",
  "toolDescription": "Add a route to a Network",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/networks/{id}/actions/add_route",
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
      "destination": "destination",
      "gateway": "gateway"
    }
  },
  inputParamsSchema
}

export default tool