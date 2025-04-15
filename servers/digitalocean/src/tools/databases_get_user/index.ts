import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "databases_get_user",
  "toolDescription": "Retrieve an Existing Database User",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/databases/{database_cluster_uuid}/users/{username}",
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
    "path": {
      "database_cluster_uuid": "database_cluster_uuid",
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool