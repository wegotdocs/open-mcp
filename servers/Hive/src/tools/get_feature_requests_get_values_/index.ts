import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_feature_requests_get_values_",
  "toolDescription": "feature-requests Values",
  "baseUrl": "http://localhost:8000",
  "path": "/feature-requests/get-values/",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "noauth <mcp-env-var>NOAUTH_CREDENTIALS</mcp-env-var>",
      "in": "header",
      "envVarName": "NOAUTH_CREDENTIALS"
    }
  ],
  "paramsMap": {
    "header": {
      "Accept": "Accept",
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool