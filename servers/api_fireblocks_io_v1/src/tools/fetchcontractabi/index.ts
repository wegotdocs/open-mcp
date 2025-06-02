import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "fetchcontractabi",
  "toolDescription": "Fetch the contract ABI",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/contracts/fetch_abi",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "baseAssetId": "baseAssetId",
      "contractAddress": "contractAddress"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool