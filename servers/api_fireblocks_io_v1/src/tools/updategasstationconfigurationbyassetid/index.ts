import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updategasstationconfigurationbyassetid",
  "toolDescription": "Edit gas station settings for an asset",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/gas_station/configuration/{assetId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "assetId": "assetId"
    },
    "body": {
      "gasThreshold": "gasThreshold",
      "gasCap": "gasCap",
      "maxGasPrice": "maxGasPrice"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool