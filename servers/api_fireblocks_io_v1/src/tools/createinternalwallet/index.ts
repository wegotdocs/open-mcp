import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createinternalwallet",
  "toolDescription": "Create an internal wallet",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/internal_wallets",
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