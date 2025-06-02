import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "registernewasset",
  "toolDescription": "Register an asset",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/assets",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "blockchainId": "blockchainId",
      "address": "address",
      "symbol": "symbol"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool