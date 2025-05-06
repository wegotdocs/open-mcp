import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateentityfile",
  "toolDescription": "Update an entity file",
  "baseUrl": "https://api.kanka.io/1.0",
  "path": "/campaigns/{campaignId}/entities/{entityId}/entity_files/{fileId}",
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
    "body": {
      "name": "name",
      "visibility": "visibility",
      "is_private": "is_private",
      "created_at": "created_at",
      "created_by": "created_by",
      "updated_at": "updated_at",
      "updated_by": "updated_by"
    }
  },
  inputParamsSchema
}

export default tool