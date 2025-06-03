import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportstakeholders",
  "toolDescription": "export clients/providers",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/stakeholders/{type}/export",
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
      "type": "type"
    },
    "body": {
      "ids": "ids"
    }
  },
  inputParamsSchema
}

export default tool