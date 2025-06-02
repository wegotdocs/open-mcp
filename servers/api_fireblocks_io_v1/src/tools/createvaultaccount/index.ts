import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createvaultaccount",
  "toolDescription": "Create a new vault account",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/accounts",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "hiddenOnUI": "hiddenOnUI",
      "customerRefId": "customerRefId",
      "autoFuel": "autoFuel",
      "vaultType": "vaultType",
      "autoAssign": "autoAssign"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool