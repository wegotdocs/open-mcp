import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmailtemplates",
  "toolDescription": "Get mail templates",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/mail_templates",
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
      "businessId": "businessId"
    },
    "query": {
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool