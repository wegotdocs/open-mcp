import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_auth_provider_callback",
  "toolDescription": "Default Callback from provider auth",
  "baseUrl": "http://localhost:1338/api",
  "path": "/auth/{provider}/callback",
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
    "path": {
      "provider": "provider"
    }
  },
  inputParamsSchema
}

export default tool