import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "feedbacks_update",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/feedbacks/{id}/",
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
      "content_title": "content_title",
      "content_type": "content_type",
      "performance_type_name": "performance_type_name",
      "performance_type_icon": "performance_type_icon",
      "recipient_data": "recipient_data",
      "type": "type",
      "share": "share",
      "rating": "rating",
      "comment": "comment",
      "is_annonymous": "is_annonymous",
      "flag": "flag",
      "team": "team",
      "performance_type": "performance_type",
      "recipient": "recipient",
      "created_by_manager": "created_by_manager",
      "recipient_manager": "recipient_manager",
      "created_by_position": "created_by_position",
      "recipient_position": "recipient_position",
      "created_by_position_level": "created_by_position_level",
      "recipient_position_level": "recipient_position_level",
      "content": "content",
      "users": "users"
    }
  },
  inputParamsSchema
}

export default tool