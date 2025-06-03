import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportmybusinessestoexcel",
  "toolDescription": "Export businesses to Excel",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/myBusinesses/export",
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