import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_audit_logs_api_audit_logs_cluster_get",
  "toolDescription": "Get Audit Logs",
  "baseUrl": "https://api.example.com",
  "path": "/api/audit-logs/{cluster}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "cluster": "cluster"
    },
    "query": {
      "limit": "limit",
      "verb": "verb",
      "object_kind": "object_kind",
      "user": "user"
    }
  },
  inputParamsSchema
}

export default tool