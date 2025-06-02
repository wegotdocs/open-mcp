import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createticketterm",
  "toolDescription": "Create leg (term)",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/smart-transfers/{ticketId}/terms",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "ticketId": "ticketId"
    },
    "body": {
      "asset": "asset",
      "amount": "amount",
      "fromNetworkId": "fromNetworkId",
      "toNetworkId": "toNetworkId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool