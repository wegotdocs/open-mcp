import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_personal_name",
  "toolDescription": "Search By Name",
  "baseUrl": "http://{{apiurl}}",
  "path": "/api/v1/personal/name",
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
      "page": "page",
      "search": "search",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool