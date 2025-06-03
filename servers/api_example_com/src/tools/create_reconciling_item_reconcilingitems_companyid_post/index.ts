import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_reconciling_item_reconcilingitems_companyid_post",
  "toolDescription": "Create reconciling item",
  "baseUrl": "https://api.example.com",
  "path": "/reconcilingitems/{companyId}",
  "method": "post",
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
      "companyId": "companyId"
    },
    "body": {
      "amount": "amount",
      "currency": "currency",
      "date": "date",
      "description": "description",
      "metadata": "metadata",
      "additionalInfo": "additionalInfo",
      "customId": "customId",
      "reconcilingSourceCustomId": "reconcilingSourceCustomId"
    }
  },
  inputParamsSchema
}

export default tool