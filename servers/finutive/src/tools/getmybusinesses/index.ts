import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmybusinesses",
  "toolDescription": "Get businesses by IDs",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/myBusinesses",
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