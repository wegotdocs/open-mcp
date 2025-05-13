import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getconfigbycode",
  "toolDescription": "根据接口编码获取接口配置",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api-config-management/{code}",
  "method": "get",
  "security": [
    {
      "key": "X-Tenant-Id",
      "value": "<mcp-env-var>X_TENANT_ID</mcp-env-var>",
      "in": "header",
      "envVarName": "X_TENANT_ID"
    }
  ],
  "paramsMap": {
    "path": {
      "code": "code"
    }
  },
  inputParamsSchema
}

export default tool