import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "disableservicebusiness",
  "toolDescription": "Disable business service",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/services/{service_id}/disable",
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
      "service_id": "service_id"
    }
  },
  inputParamsSchema
}

export default tool