import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateaccountgroup",
  "toolDescription": "Modifies or updates an AccountGroup object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/AccountGroup/{id}",
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
      "Resources": "Resources",
      "accountId": "accountId",
      "autoSubscribeAlertLevel": "autoSubscribeAlertLevel",
      "defaultGroup": "defaultGroup",
      "id": "b_id",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool