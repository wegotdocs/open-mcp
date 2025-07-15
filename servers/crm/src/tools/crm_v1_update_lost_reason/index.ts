import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_update_lost_reason",
  "toolDescription": "Atualizar motivo da perda",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/deal_lost_reasons/{deal_lost_reason_id}",
  "method": "put",
  "security": [
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool