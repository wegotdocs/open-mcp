import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcomponentenvironmentattachment",
  "toolDescription": "Creates a ComponentEnvironmentAttachment object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/ComponentEnvironmentAttachment",
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
      "componentId": "componentId",
      "componentType": "componentType",
      "environmentId": "environmentId",
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool