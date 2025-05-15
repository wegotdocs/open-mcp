import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createjavaupgrade",
  "toolDescription": "Creates a JavaUpgrade object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/JavaUpgrade",
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
      "JavaUpgradeOptions": "JavaUpgradeOptions",
      "atomId": "atomId"
    }
  },
  inputParamsSchema
}

export default tool