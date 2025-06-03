import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbusinessesdata",
  "toolDescription": "Get business data",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/myBusinesses/data",
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
      "idsList": "idsList"
    }
  },
  inputParamsSchema
}

export default tool