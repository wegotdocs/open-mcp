import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getadmintransactionsubcategories",
  "toolDescription": "Get transaction subcategories",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/banks/transactions/subcategories",
  "method": "get",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "query": {
      "search": "search",
      "offset": "offset",
      "size": "size"
    }
  },
  inputParamsSchema
}

export default tool