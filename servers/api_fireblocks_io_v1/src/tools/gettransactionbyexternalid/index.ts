import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettransactionbyexternalid",
  "toolDescription": "Get a specific transaction by external transaction ID",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/transactions/external_tx_id/{externalTxId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "externalTxId": "externalTxId"
    }
  },
  inputParamsSchema
}

export default tool