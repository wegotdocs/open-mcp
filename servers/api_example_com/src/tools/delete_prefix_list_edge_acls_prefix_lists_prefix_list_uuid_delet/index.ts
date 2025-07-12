import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_prefix_list_edge_acls_prefix_lists_prefix_list_uuid_delet",
  "toolDescription": "Delete Prefix List",
  "baseUrl": "https://api.example.com",
  "path": "/edge-acls/prefix-lists/{prefix_list_uuid}",
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
      "prefix_list_uuid": "prefix_list_uuid"
    }
  },
  inputParamsSchema
}

export default tool