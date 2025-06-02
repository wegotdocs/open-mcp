import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setvaultaccountautofuel",
  "toolDescription": "Turn autofueling on or off",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/accounts/{vaultAccountId}/set_auto_fuel",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "vaultAccountId": "vaultAccountId"
    },
    "body": {
      "autoFuel": "autoFuel"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool