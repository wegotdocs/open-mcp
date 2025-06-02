import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "freezeworkspace",
  "toolDescription": "Freeze",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/workspace/freeze",
  "method": "post",
  "security": [],
  "paramsMap": {
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool