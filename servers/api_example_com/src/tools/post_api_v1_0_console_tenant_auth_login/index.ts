import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v1_0_console_tenant_auth_login",
  "toolDescription": "Login url for the tenant - if tenant is unknown use default",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1.0/console/{tenant}/auth/login",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "tenant": "tenant"
    }
  },
  inputParamsSchema
}

export default tool