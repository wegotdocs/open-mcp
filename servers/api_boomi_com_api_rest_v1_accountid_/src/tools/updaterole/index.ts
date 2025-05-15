import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updaterole",
  "toolDescription": "Modifies or updates a Role object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/Role/{id}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "Description": "Description",
      "Privileges": "Privileges",
      "accountId": "accountId",
      "id": "b_id",
      "name": "name",
      "parentId": "parentId"
    }
  },
  inputParamsSchema
}

export default tool