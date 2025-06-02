import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "refreshnftmetadata",
  "toolDescription": "Refresh token metadata",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/nfts/tokens/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool