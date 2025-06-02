import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateticketterm",
  "toolDescription": "Update ticket leg (term)",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/smart-transfers/{ticketId}/terms/{termId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "ticketId": "ticketId",
      "termId": "termId"
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