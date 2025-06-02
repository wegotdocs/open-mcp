import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatetokensownershipspam",
  "toolDescription": "Update tokens ownership spam property",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/nfts/ownership/tokens/spam",
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