import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "databases_add_connectionpool",
  "toolDescription": "Add a New Connection Pool (PostgreSQL)",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/databases/{database_cluster_uuid}/pools",
  "method": "post",
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
    },
    "body": {
      "name": "name",
      "mode": "mode",
      "size": "size",
      "db": "db",
      "user": "user",
      "connection": "connection",
      "private_connection": "private_connection",
      "standby_connection": "standby_connection",
      "standby_private_connection": "standby_private_connection"
    }
  },
  inputParamsSchema
}

export default tool