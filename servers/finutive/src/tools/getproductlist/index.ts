import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getproductlist",
  "toolDescription": "Get list of products",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/products",
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
    }
  },
  inputParamsSchema
}

export default tool