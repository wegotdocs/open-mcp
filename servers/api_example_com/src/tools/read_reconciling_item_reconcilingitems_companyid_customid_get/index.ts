import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "read_reconciling_item_reconcilingitems_companyid_customid_get",
  "toolDescription": "Read reconciling item detail",
  "baseUrl": "https://api.example.com",
  "path": "/reconcilingitems/{companyId}/{customId}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "customId": "customId",
      "companyId": "companyId"
    }
  },
  inputParamsSchema
}

export default tool