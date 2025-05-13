import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "testtemplate",
  "toolDescription": "测试请求模板",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/template/testTemplate",
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
      "apiType": "apiType",
      "body": "body"
    }
  },
  inputParamsSchema
}

export default tool