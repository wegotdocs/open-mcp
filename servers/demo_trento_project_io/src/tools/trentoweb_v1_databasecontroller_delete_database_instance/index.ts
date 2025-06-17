import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_databasecontroller_delete_database_instance",
  "toolDescription": "Delete database instance",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/databases/{id}/hosts/{host_id}/instances/{instance_number}",
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
      "id": "id",
      "host_id": "host_id",
      "instance_number": "instance_number"
    }
  },
  inputParamsSchema
}

export default tool