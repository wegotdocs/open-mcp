import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_reconciling_item_reconcilingitems_companyid_customid_dele",
  "toolDescription": "Delete reconciling item",
  "baseUrl": "https://api.example.com",
  "path": "/reconcilingitems/{companyId}/{customId}",
  "method": "delete",
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