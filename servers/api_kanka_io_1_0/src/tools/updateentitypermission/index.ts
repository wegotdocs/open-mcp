import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateentitypermission",
  "toolDescription": "Update an entity permission",
  "baseUrl": "https://api.kanka.io/1.0",
  "path": "/campaigns/{campaignId}/entities/{entityId}/entity_permissions/{permissionId}",
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
      "user_id": "user_id",
      "role_id": "role_id",
      "access": "access",
      "created_by": "created_by",
      "updated_at": "updated_at",
      "updated_by": "updated_by"
    }
  },
  inputParamsSchema
}

export default tool