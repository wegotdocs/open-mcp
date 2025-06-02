import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retryrejectedtransactionbypassscreeningchecks",
  "toolDescription": "Calling the \"Bypass Screening Policy\" API endpoint triggers a new transaction, with the API user as the initiator, bypassing the screening policy check",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/transaction/{txId}/bypass_screening_policy",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "txId": "txId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool