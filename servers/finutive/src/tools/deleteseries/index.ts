import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteseries",
  "toolDescription": "Delete a series",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/series/{serieId}",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool