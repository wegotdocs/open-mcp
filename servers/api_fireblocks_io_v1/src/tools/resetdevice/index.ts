import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "resetdevice",
  "toolDescription": "Resets device",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/management/users/{id}/reset_device",
  "method": "post",
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