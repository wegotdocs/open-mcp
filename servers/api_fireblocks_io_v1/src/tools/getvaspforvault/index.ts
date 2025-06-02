import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getvaspforvault",
  "toolDescription": "Get assigned VASP to vault",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/travel_rule/vault/{vaultAccountId}/vasp",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "vaultAccountId": "vaultAccountId"
    }
  },
  inputParamsSchema
}

export default tool