import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbusinesscredentials",
  "toolDescription": "Get business credentials",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/admin/business/{business_id}/credentials",
  "method": "post",
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
      "business_id": "business_id"
    },
    "query": {
      "opt": "opt"
    }
  },
  inputParamsSchema
}

export default tool