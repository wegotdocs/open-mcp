import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_3",
  "toolDescription": "添加接口",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api-management/add",
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
      "code": "code",
      "name": "name",
      "title": "title",
      "apiType": "apiType",
      "url": "url",
      "method": "method",
      "encoding": "encoding",
      "headers": "headers",
      "format": "format",
      "auth": "auth",
      "authUrl": "authUrl",
      "grantType": "grantType",
      "username": "username",
      "password": "password",
      "secretId": "secretId",
      "secretKey": "secretKey",
      "tokenName": "tokenName",
      "enabled": "enabled",
      "syncCallback": "syncCallback"
    }
  },
  inputParamsSchema
}

export default tool