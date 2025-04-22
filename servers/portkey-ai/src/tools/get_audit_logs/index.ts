import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_audit_logs",
  "toolDescription": "Get Audit Logs",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/audit-logs",
  "method": "get",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "start_time": "start_time",
      "end_time": "end_time",
      "organisation_id": "organisation_id",
      "method": "method",
      "uri": "uri",
      "request_id": "request_id",
      "user_id": "user_id",
      "user_type": "user_type",
      "workspace_id": "workspace_id",
      "response_status_code": "response_status_code",
      "resource_type": "resource_type",
      "action": "action",
      "client_ip": "client_ip",
      "country": "country",
      "current_page": "current_page",
      "page_size": "page_size"
    }
  },
  inputParamsSchema
}

export default tool