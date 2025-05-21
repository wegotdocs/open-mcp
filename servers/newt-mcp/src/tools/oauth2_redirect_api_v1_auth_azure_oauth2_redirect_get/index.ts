import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "oauth2_redirect_api_v1_auth_azure_oauth2_redirect_get",
  "toolDescription": "Oauth2 Redirect",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/auth/azure/oauth2-redirect",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool