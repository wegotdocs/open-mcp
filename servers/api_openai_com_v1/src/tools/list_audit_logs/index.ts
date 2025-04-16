import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_audit_logs",
  "toolDescription": "List user actions and configuration changes within this organization.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/audit_logs",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "effective_at": "effective_at",
      "project_ids[]": "project_ids[]",
      "event_types[]": "event_types[]",
      "actor_ids[]": "actor_ids[]",
      "actor_emails[]": "actor_emails[]",
      "resource_ids[]": "resource_ids[]",
      "limit": "limit",
      "after": "after",
      "before": "before"
    }
  },
  inputParamsSchema
}

export default tool