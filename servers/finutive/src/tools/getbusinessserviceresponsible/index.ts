import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbusinessserviceresponsible",
  "toolDescription": "Get service responsible",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/services/{service_id}/responsible",
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
      "service_id": "service_id",
      "business_id": "business_id"
    }
  },
  inputParamsSchema
}

export default tool