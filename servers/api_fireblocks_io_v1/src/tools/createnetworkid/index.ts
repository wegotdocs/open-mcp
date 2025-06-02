import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createnetworkid",
  "toolDescription": "Creates a new Network ID",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/network_ids",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "routingPolicy": "routingPolicy"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool