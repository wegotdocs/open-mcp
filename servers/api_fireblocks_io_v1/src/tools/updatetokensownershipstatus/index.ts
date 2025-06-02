import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatetokensownershipstatus",
  "toolDescription": "Update tokens ownership status",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/nfts/ownership/tokens/status",
  "method": "put",
  "security": [],
  "paramsMap": {
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool