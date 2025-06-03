import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpromotionsexceptions",
  "toolDescription": "Get promotions exceptions",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/promotions/exceptions",
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
      "type": "type",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool