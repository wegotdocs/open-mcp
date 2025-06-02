import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "depositfundsfromlinkeddda",
  "toolDescription": "Deposit funds from DDA",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/fiat_accounts/{accountId}/deposit_from_linked_dda",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "accountId": "accountId"
    },
    "body": {
      "amount": "amount"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool