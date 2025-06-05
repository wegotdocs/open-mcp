import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "events_partial_update",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/events/{ulid}/",
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
      "shared_with": "shared_with",
      "ulid": "b_ulid",
      "created_at": "created_at",
      "updated_at": "updated_at",
      "deleted_at": "deleted_at",
      "title": "title",
      "description": "description",
      "start_at": "start_at",
      "end_at": "end_at",
      "is_full_day_event": "is_full_day_event",
      "is_team_event": "is_team_event",
      "is_deleted": "is_deleted",
      "created_by": "created_by",
      "updated_by": "updated_by",
      "deleted_by": "deleted_by",
      "team": "team",
      "shared_users": "shared_users",
      "shared_groups": "shared_groups",
      "shared_positions": "shared_positions"
    }
  },
  inputParamsSchema
}

export default tool