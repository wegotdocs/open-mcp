import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sendtaxesemail",
  "toolDescription": "Send taxes email",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/census-statements/businesses/{business_id}/period/{period}/email",
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
      "business_id": "business_id",
      "period": "period"
    },
    "body": {
      "type": "type",
      "content": "content"
    }
  },
  inputParamsSchema
}

export default tool