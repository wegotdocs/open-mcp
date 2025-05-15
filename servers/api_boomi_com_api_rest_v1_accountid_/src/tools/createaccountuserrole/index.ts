import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createaccountuserrole",
  "toolDescription": "Creates an AccountUserRole object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/AccountUserRole",
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
      "accountId": "accountId",
      "firstName": "firstName",
      "id": "id",
      "lastName": "lastName",
      "notifyUser": "notifyUser",
      "roleId": "roleId",
      "userId": "userId"
    }
  },
  inputParamsSchema
}

export default tool