import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deploycontract",
  "toolDescription": "Deploy contract",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/templates/{contractTemplateId}/deploy",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "contractTemplateId": "contractTemplateId"
    },
    "body": {
      "assetId": "assetId",
      "vaultAccountId": "vaultAccountId",
      "constructorParameters": "constructorParameters",
      "useGasless": "useGasless",
      "fee": "fee",
      "feeLevel": "feeLevel"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool