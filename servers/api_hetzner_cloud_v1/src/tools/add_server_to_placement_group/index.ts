import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_server_to_placement_group",
  "toolDescription": "Add a Server to a Placement Group",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/servers/{id}/actions/add_to_placement_group",
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
      "placement_group": "placement_group"
    }
  },
  inputParamsSchema
}

export default tool