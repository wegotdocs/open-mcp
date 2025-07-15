import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_create_source",
  "toolDescription": "Criar fontes",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/deal_sources",
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
      "deal_source": "deal_source"
    }
  },
  inputParamsSchema
}

export default tool