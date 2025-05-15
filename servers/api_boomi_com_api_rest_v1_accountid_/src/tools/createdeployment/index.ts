import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createdeployment",
  "toolDescription": "Creates a Deployment object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/Deployment",
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
      "current": "current",
      "deployedBy": "deployedBy",
      "deployedOn": "deployedOn",
      "digest": "digest",
      "environmentId": "environmentId",
      "id": "id",
      "listenerStatus": "listenerStatus",
      "message": "message",
      "notes": "notes",
      "processId": "processId",
      "version": "version"
    }
  },
  inputParamsSchema
}

export default tool