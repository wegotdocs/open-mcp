import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_auth_config_api_auth_config_put",
  "toolDescription": "Update Auth Config",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/config",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "auth_enabled": "auth_enabled",
      "auth_mode": "auth_mode",
      "auth0_domain": "auth0_domain",
      "auth0_api_audience": "auth0_api_audience",
      "auth0_client_id": "auth0_client_id"
    }
  },
  inputParamsSchema
}

export default tool