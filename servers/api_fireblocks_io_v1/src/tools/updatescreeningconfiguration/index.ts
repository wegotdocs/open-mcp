import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatescreeningconfiguration",
  "toolDescription": "Tenant - Screening Configuration",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/configurations",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "disableBypass": "disableBypass",
      "disableUnfreeze": "disableUnfreeze"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool