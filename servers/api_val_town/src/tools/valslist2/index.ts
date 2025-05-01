import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "valslist2",
  "toolDescription": "Lists all public vals",
  "baseUrl": "https://api.val.town",
  "path": "/v2/vals",
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
      "offset": "offset",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool