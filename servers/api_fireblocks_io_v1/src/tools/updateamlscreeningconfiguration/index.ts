import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateamlscreeningconfiguration",
  "toolDescription": "Update AML Configuration",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/aml/policy_configuration",
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