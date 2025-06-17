import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_products_id_",
  "toolDescription": "Create a product with predefined ID",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/products/{id}",
  "method": "put",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "description": "description",
      "taxCategoryId": "taxCategoryId",
      "requiresShipping": "requiresShipping",
      "accountingCode": "accountingCode",
      "customFields": "customFields",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool