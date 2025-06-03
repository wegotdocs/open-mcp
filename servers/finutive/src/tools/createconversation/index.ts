import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createconversation",
  "toolDescription": "Crear conversación",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/chat/conversations/{specialType}",
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
      "businessId": "businessId",
      "specialType": "specialType"
    }
  },
  inputParamsSchema
}

export default tool