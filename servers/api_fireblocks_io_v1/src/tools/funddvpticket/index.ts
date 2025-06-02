import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "funddvpticket",
  "toolDescription": "Fund dvp ticket",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/smart_transfers/{ticketId}/dvp/fund",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "ticketId": "ticketId"
    },
    "body": {
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