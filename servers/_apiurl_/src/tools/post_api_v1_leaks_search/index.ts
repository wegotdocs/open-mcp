import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v1_leaks_search",
  "toolDescription": "ISE POST",
  "baseUrl": "http://{{apiurl}}",
  "path": "/api/v1/leaks/search",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "jwt <mcp-env-var>JWT_CREDENTIALS</mcp-env-var>",
      "in": "header",
      "envVarName": "JWT_CREDENTIALS"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool