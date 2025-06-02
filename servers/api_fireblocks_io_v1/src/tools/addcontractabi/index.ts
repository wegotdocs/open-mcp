import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addcontractabi",
  "toolDescription": "Save contract ABI",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/contracts/abi",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "contractAddress": "contractAddress",
      "baseAssetId": "baseAssetId",
      "abi": "abi",
      "name": "name"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool