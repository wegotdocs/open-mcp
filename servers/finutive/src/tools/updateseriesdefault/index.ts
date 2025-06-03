import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateseriesdefault",
  "toolDescription": "Update series default status",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/series/{serieId}/default",
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
      "serieId": "serieId"
    },
    "body": {
      "is_default": "is_default"
    }
  },
  inputParamsSchema
}

export default tool