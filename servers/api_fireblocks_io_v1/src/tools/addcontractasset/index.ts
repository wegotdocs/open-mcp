import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addcontractasset",
  "toolDescription": "Add an asset to a contract",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/contracts/{contractId}/{assetId}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "contractId": "contractId",
      "assetId": "assetId"
    },
    "body": {
      "address": "address",
      "tag": "tag"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool