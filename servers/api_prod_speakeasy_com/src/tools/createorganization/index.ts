import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorganization",
  "toolDescription": "Create an organization",
  "baseUrl": "https://api.prod.speakeasy.com",
  "path": "/v1/organization",
  "method": "post",
  "security": [
    {
      "key": "x-api-key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    },
    {
      "key": "x-workspace-identifier",
      "value": "<mcp-env-var>X_WORKSPACE_IDENTIFIER</mcp-env-var>",
      "in": "header",
      "envVarName": "X_WORKSPACE_IDENTIFIER"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "slug": "slug",
      "account_type": "account_type",
      "telemetry_disabled": "telemetry_disabled",
      "created_at": "created_at",
      "updated_at": "updated_at",
      "free_trial_expiry": "free_trial_expiry",
      "sso_connection_id": "sso_connection_id",
      "sso_activated": "sso_activated",
      "internal": "internal"
    }
  },
  inputParamsSchema
}

export default tool