import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsatisfactionsurveys",
  "toolDescription": "Get satisfaction surveys",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/nps/satisfaction-surveys",
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
      "pageable": "pageable"
    }
  },
  inputParamsSchema
}

export default tool