import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieveequipmentclasses",
  "toolDescription": "Retrieve Equipment Classes",
  "baseUrl": "https://api.example.com",
  "path": "/v2/equip-classes",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "includePointClasses": "includePointClasses"
    }
  },
  inputParamsSchema
}

export default tool