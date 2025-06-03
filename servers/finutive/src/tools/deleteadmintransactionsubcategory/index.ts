import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteadmintransactionsubcategory",
  "toolDescription": "Delete transaction subcategory",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/banks/transactions/subcategories/{subcategory_id}",
  "method": "delete",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "subcategory_id": "subcategory_id"
    }
  },
  inputParamsSchema
}

export default tool