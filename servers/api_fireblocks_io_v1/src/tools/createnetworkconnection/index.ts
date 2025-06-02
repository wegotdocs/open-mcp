import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createnetworkconnection",
  "toolDescription": "Creates a new network connection",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/network_connections",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "localNetworkId": "localNetworkId",
      "remoteNetworkId": "remoteNetworkId",
      "routingPolicy": "routingPolicy"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool