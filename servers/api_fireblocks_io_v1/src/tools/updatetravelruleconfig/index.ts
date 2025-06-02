import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatetravelruleconfig",
  "toolDescription": "Update Travel Rule Configuration",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/travel_rule/policy_configuration",
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