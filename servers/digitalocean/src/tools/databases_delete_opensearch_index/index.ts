import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "databases_delete_opensearch_index",
  "toolDescription": "Delete Index for OpenSearch Cluster",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/databases/{database_cluster_uuid}/indexes/{index_name}",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "database_cluster_uuid": "database_cluster_uuid",
      "index_name": "index_name"
    }
  },
  inputParamsSchema
}

export default tool