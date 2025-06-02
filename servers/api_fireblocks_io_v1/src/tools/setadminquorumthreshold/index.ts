import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setadminquorumthreshold",
  "toolDescription": "Update admin quorum threshold",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/admin_quorum",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "adminQuorumThreshold": "adminQuorumThreshold"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool