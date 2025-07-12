import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_edge_acl_rule_edge_acls_rule_id_delete",
  "toolDescription": "Delete Edge Acl Rule",
  "baseUrl": "https://api.example.com",
  "path": "/edge-acls/{rule_id}",
  "method": "delete",
  "security": [
    {
      "key": "X-API-Key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "rule_id": "rule_id"
    }
  },
  inputParamsSchema
}

export default tool