import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_update_product",
  "toolDescription": "Atualizar produto",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/products/{product_id}",
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
      "product": "product"
    }
  },
  inputParamsSchema
}

export default tool