import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "fundticketterm",
  "toolDescription": "Define funding source",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/smart-transfers/{ticketId}/terms/{termId}/fund",
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
      "networkConnectionId": "networkConnectionId",
      "srcId": "srcId",
      "srcType": "srcType",
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