import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatetokenownershipstatus",
  "toolDescription": "Update token ownership status",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/nfts/ownership/tokens/{id}/status",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "status": "status"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool