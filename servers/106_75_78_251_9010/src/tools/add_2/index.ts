import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_2",
  "toolDescription": "添加菜单",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api/menu/add",
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
      "systemCode": "systemCode",
      "parentId": "parentId",
      "type": "type",
      "title": "title",
      "description": "description",
      "permissions": "permissions",
      "component": "component",
      "orderNum": "orderNum",
      "icon": "icon",
      "path": "path",
      "iframeShow": "iframeShow"
    }
  },
  inputParamsSchema
}

export default tool