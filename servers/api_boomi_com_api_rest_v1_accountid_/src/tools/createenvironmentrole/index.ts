import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createenvironmentrole",
  "toolDescription": "Creates an EnvironmentRole object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/EnvironmentRole",
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
      "environmentId": "environmentId",
      "id": "id",
      "roleId": "roleId"
    }
  },
  inputParamsSchema
}

export default tool