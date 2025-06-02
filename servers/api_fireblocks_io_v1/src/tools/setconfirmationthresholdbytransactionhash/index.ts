import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setconfirmationthresholdbytransactionhash",
  "toolDescription": "Set confirmation threshold by transaction hash",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/txHash/{txHash}/set_confirmation_threshold",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "txHash": "txHash"
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