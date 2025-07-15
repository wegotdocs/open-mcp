import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_update_source",
  "toolDescription": "Atualizar fontes",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/deal_sources/{deal_source_id}",
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
      "deal_source": "deal_source"
    }
  },
  inputParamsSchema
}

export default tool