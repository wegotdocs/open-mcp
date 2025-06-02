import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createexternalwallet",
  "toolDescription": "Create an external wallet",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/external_wallets",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "customerRefId": "customerRefId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool