import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createintegrationpackatomattachment",
  "toolDescription": "Creates an IntegrationPackAtomAttachment object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/IntegrationPackAtomAttachment",
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
      "atomId": "atomId",
      "id": "id",
      "integrationPackInstanceId": "integrationPackInstanceId"
    }
  },
  inputParamsSchema
}

export default tool