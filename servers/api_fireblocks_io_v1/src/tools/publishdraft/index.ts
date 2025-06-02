import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "publishdraft",
  "toolDescription": "Send publish request for a certain draft id",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tap/draft",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "draftId": "draftId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool