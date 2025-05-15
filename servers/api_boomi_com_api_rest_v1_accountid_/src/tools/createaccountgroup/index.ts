import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createaccountgroup",
  "toolDescription": "Creates an AccountGroup object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/AccountGroup",
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
    "body": {
      "Resources": "Resources",
      "accountId": "accountId",
      "autoSubscribeAlertLevel": "autoSubscribeAlertLevel",
      "defaultGroup": "defaultGroup",
      "id": "id",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool