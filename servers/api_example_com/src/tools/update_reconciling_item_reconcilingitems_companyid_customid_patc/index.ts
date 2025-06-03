import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_reconciling_item_reconcilingitems_companyid_customid_patc",
  "toolDescription": "Update reconciling item",
  "baseUrl": "https://api.example.com",
  "path": "/reconcilingitems/{companyId}/{customId}",
  "method": "patch",
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
    },
    "body": {
      "amount": "amount",
      "currency": "currency",
      "date": "date",
      "description": "description",
      "metadata": "metadata",
      "additionalInfo": "additionalInfo"
    }
  },
  inputParamsSchema
}

export default tool