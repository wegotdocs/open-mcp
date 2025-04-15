import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_deletelegalarrangements",
  "toolDescription": "Delete legal arrangements",
  "baseUrl": "https://cal-test.adyen.com/cal/services/Account/v6",
  "path": "/deleteLegalArrangements",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "X-API-Key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "accountHolderCode": "accountHolderCode",
      "legalArrangements": "legalArrangements"
    }
  },
  inputParamsSchema
}

export default tool