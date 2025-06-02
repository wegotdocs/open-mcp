import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getasset",
  "toolDescription": "Get an asset",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/assets/{id}",
  "method": "get",
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