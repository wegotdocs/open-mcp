import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createtransaction",
  "toolDescription": "Create a new transaction",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/transactions",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "operation": "operation",
      "note": "note",
      "externalTxId": "externalTxId",
      "assetId": "assetId",
      "source": "source",
      "destination": "destination",
      "destinations": "destinations",
      "amount": "amount",
      "treatAsGrossAmount": "treatAsGrossAmount",
      "forceSweep": "forceSweep",
      "feeLevel": "feeLevel",
      "fee": "fee",
      "priorityFee": "priorityFee",
      "failOnLowFee": "failOnLowFee",
      "maxFee": "maxFee",
      "maxTotalFee": "maxTotalFee",
      "gasLimit": "gasLimit",
      "gasPrice": "gasPrice",
      "networkFee": "networkFee",
      "replaceTxByHash": "replaceTxByHash",
      "extraParameters": "extraParameters",
      "customerRefId": "customerRefId",
      "travelRuleMessage": "travelRuleMessage",
      "useGasless": "useGasless"
    },
    "header": {
      "X-End-User-Wallet-Id": "X-End-User-Wallet-Id",
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool