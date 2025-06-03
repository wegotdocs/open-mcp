import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcensusdeclarationmodelsbyperiod",
  "toolDescription": "Get census declaration models by period",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/invoices/census_statements/models",
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
      "period": "period"
    }
  },
  inputParamsSchema
}

export default tool