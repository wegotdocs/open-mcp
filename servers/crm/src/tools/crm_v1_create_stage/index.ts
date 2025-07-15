import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_create_stage",
  "toolDescription": "Criar etapa do funil de venda",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/deal_stages",
  "method": "post",
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