import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateenvironment",
  "toolDescription": "Modifies or updates an Environment object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/Environment/{id}",
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
      "classification": "classification",
      "id": "b_id",
      "name": "name",
      "parentAccount": "parentAccount",
      "parentEnvironment": "parentEnvironment"
    }
  },
  inputParamsSchema
}

export default tool