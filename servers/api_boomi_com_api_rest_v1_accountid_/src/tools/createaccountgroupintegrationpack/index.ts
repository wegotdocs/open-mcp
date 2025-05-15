import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createaccountgroupintegrationpack",
  "toolDescription": "Creates an AccountGroupIntegrationPack object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/AccountGroupIntegrationPack",
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
      "accountGroupId": "accountGroupId",
      "id": "id",
      "installationType": "installationType",
      "integrationPackId": "integrationPackId",
      "integrationPackName": "integrationPackName"
    }
  },
  inputParamsSchema
}

export default tool