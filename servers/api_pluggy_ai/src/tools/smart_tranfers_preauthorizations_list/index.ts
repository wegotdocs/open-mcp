import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "smart_tranfers_preauthorizations_list",
  "toolDescription": "List preauthorizations",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/smart-transfers/preauthorizations",
  "method": "get",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "pageSize": "pageSize",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool