import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "login_api_v1_auth_azure_login_get",
  "toolDescription": "Login",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/auth/azure/login",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "next": "next"
    }
  },
  inputParamsSchema
}

export default tool