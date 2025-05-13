import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_5",
  "toolDescription": "修改接口配置",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api-config-management/update",
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
    "body": {
      "id": "id",
      "code": "code",
      "paramConverterType": "paramConverterType",
      "jsParamConverter": "jsParamConverter",
      "templateParamConverter": "templateParamConverter",
      "responseConverterType": "responseConverterType",
      "jsResponseConverter": "jsResponseConverter",
      "templateResponseConverter": "templateResponseConverter"
    }
  },
  inputParamsSchema
}

export default tool