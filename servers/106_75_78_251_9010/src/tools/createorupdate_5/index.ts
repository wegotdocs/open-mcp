import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorupdate_5",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/config/dictionary/createOrUpdate",
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
      "code": "code",
      "editable": "editable",
      "name": "name",
      "description": "description",
      "items": "items",
      "version": "version"
    }
  },
  inputParamsSchema
}

export default tool