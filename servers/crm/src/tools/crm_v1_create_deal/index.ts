import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_create_deal",
  "toolDescription": "Criar negociação",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/deals",
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
      "campaign": "campaign",
      "contacts": "contacts",
      "deal": "deal",
      "deal_products": "deal_products",
      "deal_source": "deal_source",
      "distribution_settings": "distribution_settings",
      "organization": "organization"
    }
  },
  inputParamsSchema
}

export default tool