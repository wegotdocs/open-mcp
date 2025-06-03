import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getproducttable",
  "toolDescription": "Get list of products for product table",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/products/table",
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
    "path": {
      "businessId": "businessId"
    },
    "query": {
      "search": "search",
      "length": "length",
      "start": "start",
      "readAll": "readAll",
      "orderColumn": "orderColumn",
      "order_dir": "order_dir"
    }
  },
  inputParamsSchema
}

export default tool