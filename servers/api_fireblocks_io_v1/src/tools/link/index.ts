import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "link",
  "toolDescription": "Link a contract",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/tokens/link",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "type": "type",
      "refId": "refId",
      "displayName": "displayName",
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