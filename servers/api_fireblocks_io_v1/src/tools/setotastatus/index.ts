import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setotastatus",
  "toolDescription": "Enable or disable transactions to OTA",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/management/ota",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "enabled": "enabled"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool