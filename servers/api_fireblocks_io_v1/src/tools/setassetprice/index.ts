import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setassetprice",
  "toolDescription": "Set asset price",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/assets/prices/{id}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "currency": "currency",
      "price": "price"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool