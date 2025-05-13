import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createapikey",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/api-keys/create",
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
      "createTime": "createTime",
      "createUser": "createUser",
      "updateUser": "updateUser",
      "updateTime": "updateTime",
      "id": "id",
      "apiKeyName": "apiKeyName",
      "apiKey": "apiKey"
    }
  },
  inputParamsSchema
}

export default tool