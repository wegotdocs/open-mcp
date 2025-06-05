import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "groups_partial_update",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/groups/{id}/",
  "method": "patch",
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
      "id": "id"
    },
    "body": {
      "id": "b_id",
      "created_by": "created_by",
      "updated_by": "updated_by",
      "deleted_by": "deleted_by",
      "ulid": "ulid",
      "created_at": "created_at",
      "updated_at": "updated_at",
      "deleted_at": "deleted_at",
      "positions": "positions",
      "users": "users",
      "name": "name",
      "description": "description",
      "icon": "icon",
      "colour": "colour",
      "type": "type",
      "status": "status",
      "team": "team",
      "owner": "owner"
    }
  },
  inputParamsSchema
}

export default tool