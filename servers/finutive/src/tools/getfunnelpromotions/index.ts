import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getfunnelpromotions",
  "toolDescription": "Get funnel promotions",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/promotions/funnel",
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
      "pageable": "pageable",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool