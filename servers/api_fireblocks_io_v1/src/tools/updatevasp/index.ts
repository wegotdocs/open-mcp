import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatevasp",
  "toolDescription": "Update VASP Details",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/travel_rule/vasp/update",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "did": "did",
      "pii_didkey": "pii_didkey"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool