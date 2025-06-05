import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "boards_partial_update",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/boards/{ulid}/",
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
      "ulid": "ulid"
    },
    "body": {
      "id": "id",
      "created_by": "created_by",
      "updated_by": "updated_by",
      "deleted_by": "deleted_by",
      "ulid": "b_ulid",
      "created_at": "created_at",
      "updated_at": "updated_at",
      "deleted_at": "deleted_at",
      "name": "name",
      "owner_data": "owner_data",
      "is_editable": "is_editable",
      "shared_users_data": "shared_users_data",
      "shared_groups_data": "shared_groups_data",
      "status": "status",
      "description": "description",
      "share": "share",
      "owner": "owner",
      "team": "team",
      "shared_users": "shared_users",
      "shared_groups": "shared_groups"
    }
  },
  inputParamsSchema
}

export default tool