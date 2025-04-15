import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "identityverificationretry",
  "toolDescription": "Retry an Identity Verification",
  "baseUrl": "https://production.plaid.com",
  "path": "/identity_verification/retry",
  "method": "post",
  "security": [
    {
      "key": "PLAID-CLIENT-ID",
      "value": "<mcp-env-var>PLAID_CLIENT_ID</mcp-env-var>",
      "in": "header",
      "envVarName": "PLAID_CLIENT_ID"
    },
    {
      "key": "PLAID-SECRET",
      "value": "<mcp-env-var>PLAID_SECRET</mcp-env-var>",
      "in": "header",
      "envVarName": "PLAID_SECRET"
    },
    {
      "key": "Plaid-Version",
      "value": "<mcp-env-var>PLAID_VERSION</mcp-env-var>",
      "in": "header",
      "envVarName": "PLAID_VERSION"
    }
  ],
  "paramsMap": {
    "body": {
      "client_user_id": "client_user_id",
      "template_id": "template_id",
      "strategy": "strategy",
      "user": "user",
      "steps": "steps",
      "is_shareable": "is_shareable",
      "client_id": "client_id",
      "secret": "secret"
    }
  },
  inputParamsSchema
}

export default tool