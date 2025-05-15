import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "executejavarollback",
  "toolDescription": "Executes an action on a JavaRollback object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/JavaRollback/execute/{id}",
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
      "atomId": "atomId"
    }
  },
  inputParamsSchema
}

export default tool