import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settransactionconfirmationthreshold",
  "toolDescription": "Set confirmation threshold by Fireblocks Transaction ID",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/transactions/{txId}/set_confirmation_threshold",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "txId": "txId"
    },
    "body": {
      "numOfConfirmations": "numOfConfirmations"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool