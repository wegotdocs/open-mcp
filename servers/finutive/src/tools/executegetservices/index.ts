import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "executegetservices",
  "toolDescription": "Get services list",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/services",
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
      "business_id": "business_id"
    },
    "query": {
      "getServicesRequestDto": "getServicesRequestDto"
    }
  },
  inputParamsSchema
}

export default tool