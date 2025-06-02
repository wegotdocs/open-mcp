import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setnetworkidroutingpolicy",
  "toolDescription": "Update network id routing policy.",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/network_ids/{networkId}/set_routing_policy",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "networkId": "networkId"
    },
    "body": {
      "routingPolicy": "routingPolicy"
    }
  },
  inputParamsSchema
}

export default tool