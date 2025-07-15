import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_list_stages",
  "toolDescription": "Listar etapas do funil de venda",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/deal_stages",
  "method": "get",
  "security": [
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "deal_pipeline_id": "deal_pipeline_id",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool