import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_dukcapil_photo",
  "toolDescription": "Search Photo",
  "baseUrl": "http://{{apiurl}}",
  "path": "/api/v1/dukcapil/photo",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "jwt <mcp-env-var>JWT_CREDENTIALS</mcp-env-var>",
      "in": "header",
      "envVarName": "JWT_CREDENTIALS"
    }
  ],
  "paramsMap": {
    "query": {
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool