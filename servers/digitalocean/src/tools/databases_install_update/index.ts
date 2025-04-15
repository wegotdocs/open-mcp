import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "databases_install_update",
  "toolDescription": "Start Database Maintenance",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/databases/{database_cluster_uuid}/install_update",
  "method": "put",
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
      "database_cluster_uuid": "database_cluster_uuid"
    }
  },
  inputParamsSchema
}

export default tool