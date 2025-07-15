import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_update_stage",
  "toolDescription": "Atualizar etapa do funil de venda",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/deal_stages/{deal_stage_id}",
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
      "deal_pipeline_id": "deal_pipeline_id",
      "description": "description",
      "name": "name",
      "objective": "objective",
      "order": "order"
    }
  },
  inputParamsSchema
}

export default tool