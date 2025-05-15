import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createintegrationpackinstance",
  "toolDescription": "Creates an IntegrationPackInstance object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/IntegrationPackInstance",
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
      "ProcessId": "ProcessId",
      "id": "id",
      "integrationPackId": "integrationPackId",
      "integrationPackOverrideName": "integrationPackOverrideName"
    }
  },
  inputParamsSchema
}

export default tool