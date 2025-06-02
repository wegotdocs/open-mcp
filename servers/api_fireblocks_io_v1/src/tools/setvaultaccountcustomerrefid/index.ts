import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setvaultaccountcustomerrefid",
  "toolDescription": "Set an AML/KYT customer reference ID for a vault account",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/accounts/{vaultAccountId}/set_customer_ref_id",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "vaultAccountId": "vaultAccountId"
    },
    "body": {
      "customerRefId": "customerRefId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool