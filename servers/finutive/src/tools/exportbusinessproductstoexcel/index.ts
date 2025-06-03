import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportbusinessproductstoexcel",
  "toolDescription": "Export business products to Excel",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/businesses-products-export",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool