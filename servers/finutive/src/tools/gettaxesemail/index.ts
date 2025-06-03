import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettaxesemail",
  "toolDescription": "Get taxes email",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/census-statements/businesses/{business_id}/period/{period}/email",
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
      "business_id": "business_id",
      "period": "period"
    },
    "query": {
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool