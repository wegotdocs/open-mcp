import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "databases_destroy_replica",
  "toolDescription": "Destroy a Read-only Replica",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/databases/{database_cluster_uuid}/replicas/{replica_name}",
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
      "replica_name": "replica_name"
    }
  },
  inputParamsSchema
}

export default tool