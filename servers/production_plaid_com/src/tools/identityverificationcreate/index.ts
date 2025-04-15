import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "identityverificationcreate",
  "toolDescription": "Create a new Identity Verification",
  "baseUrl": "https://production.plaid.com",
  "path": "/identity_verification/create",
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
      "is_shareable": "is_shareable",
      "template_id": "template_id",
      "gave_consent": "gave_consent",
      "user": "user",
      "client_id": "client_id",
      "secret": "secret",
      "is_idempotent": "is_idempotent"
    }
  },
  inputParamsSchema
}

export default tool