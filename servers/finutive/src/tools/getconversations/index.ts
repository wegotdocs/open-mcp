import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getconversations",
  "toolDescription": "Obtener conversaciones de chat",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/chat/conversations/{specialType}",
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
      "businessId": "businessId",
      "specialType": "specialType"
    },
    "query": {
      "pageable": "pageable"
    }
  },
  inputParamsSchema
}

export default tool