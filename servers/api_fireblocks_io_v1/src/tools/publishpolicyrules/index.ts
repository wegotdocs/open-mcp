import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "publishpolicyrules",
  "toolDescription": "Send publish request for a set of policy rules",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tap/publish",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "rules": "rules"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool