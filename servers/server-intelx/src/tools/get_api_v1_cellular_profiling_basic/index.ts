import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_cellular_profiling_basic",
  "toolDescription": "Basic Profile",
  "baseUrl": "http://{{apiurl}}",
  "path": "/api/v1/cellular-profiling/basic",
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