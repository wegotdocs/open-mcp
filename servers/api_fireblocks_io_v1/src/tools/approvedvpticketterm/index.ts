import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "approvedvpticketterm",
  "toolDescription": "Set funding source and approval",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/smart_transfers/{ticketId}/terms/{termId}/dvp/approve",
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
      "srcId": "srcId",
      "fee": "fee",
      "feeLevel": "feeLevel",
      "note": "note"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool