import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_update_pipeline",
  "toolDescription": "Atualizar funil de vendas",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/deal_pipelines/{deal_pipeline_id}",
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
      "deal_pipeline": "deal_pipeline"
    }
  },
  inputParamsSchema
}

export default tool