import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "databases_delete_onlinemigration",
  "toolDescription": "Stop an Online Migration",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/databases/{database_cluster_uuid}/online-migration/{migration_id}",
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
      "migration_id": "migration_id"
    }
  },
  inputParamsSchema
}

export default tool