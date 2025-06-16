import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "searchworkspaceevents",
  "toolDescription": "Search events for a particular workspace by any field",
  "baseUrl": "https://api.prod.speakeasy.com",
  "path": "/v1/workspace/{workspace_id}/events",
  "method": "get",
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
    "query": {
      "source_revision_digest": "source_revision_digest",
      "lint_report_digest": "lint_report_digest",
      "openapi_diff_report_digest": "openapi_diff_report_digest",
      "interaction_type": "interaction_type",
      "generate_gen_lock_id": "generate_gen_lock_id",
      "execution_id": "execution_id",
      "success": "success",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool