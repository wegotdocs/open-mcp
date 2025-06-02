import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setroutingpolicy",
  "toolDescription": "Update network connection routing policy.",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/network_connections/{connectionId}/set_routing_policy",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "connectionId": "connectionId"
    },
    "body": {
      "routingPolicy": "routingPolicy"
    }
  },
  inputParamsSchema
}

export default tool