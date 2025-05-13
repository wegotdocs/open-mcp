import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "removetemplate",
  "toolDescription": "删除自定义模板",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/template/removeTemplate",
  "method": "post",
  "security": [
    {
      "key": "X-Tenant-Id",
      "value": "<mcp-env-var>X_TENANT_ID</mcp-env-var>",
      "in": "header",
      "envVarName": "X_TENANT_ID"
    }
  ],
  "paramsMap": {
    "query": {
      "templateName": "templateName"
    }
  },
  inputParamsSchema
}

export default tool