import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "logoutuser",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api/auth/signout",
  "method": "get",
  "security": [
    {
      "key": "X-Tenant-Id",
      "value": "<mcp-env-var>X_TENANT_ID</mcp-env-var>",
      "in": "header",
      "envVarName": "X_TENANT_ID"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool