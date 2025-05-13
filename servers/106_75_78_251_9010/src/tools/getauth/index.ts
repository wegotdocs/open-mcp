import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getauth",
  "toolDescription": "查询菜单树",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api/currentUser/getAuth",
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