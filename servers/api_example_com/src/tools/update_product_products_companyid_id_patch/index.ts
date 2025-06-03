import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_product_products_companyid_id_patch",
  "toolDescription": "Update product",
  "baseUrl": "https://api.example.com",
  "path": "/products/{companyId}/{id}",
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
      "id": "id",
      "companyId": "companyId"
    },
    "body": {
      "additionalInfo": "additionalInfo",
      "accountingCode": "accountingCode"
    }
  },
  inputParamsSchema
}

export default tool