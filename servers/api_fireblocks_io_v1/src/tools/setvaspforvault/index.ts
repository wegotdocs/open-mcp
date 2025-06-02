import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setvaspforvault",
  "toolDescription": "Assign VASP to vault",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/travel_rule/vault/{vaultAccountId}/vasp",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "vaultAccountId": "vaultAccountId"
    },
    "body": {
      "vaspDid": "vaspDid"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool