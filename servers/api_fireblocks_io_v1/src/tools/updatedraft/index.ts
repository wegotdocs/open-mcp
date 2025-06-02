import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatedraft",
  "toolDescription": "Update the draft with a new set of rules",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tap/draft",
  "method": "put",
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