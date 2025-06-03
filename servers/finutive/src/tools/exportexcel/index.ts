import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportexcel",
  "toolDescription": "Export businesses to excel",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/export",
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
    "query": {
      "businessIds": "businessIds"
    }
  },
  inputParamsSchema
}

export default tool