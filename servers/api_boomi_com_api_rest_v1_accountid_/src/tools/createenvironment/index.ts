import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createenvironment",
  "toolDescription": "Creates an Environment object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/Environment",
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
      "classification": "classification",
      "id": "id",
      "name": "name",
      "parentAccount": "parentAccount",
      "parentEnvironment": "parentEnvironment"
    }
  },
  inputParamsSchema
}

export default tool