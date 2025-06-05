import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "learns_create",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/learns/",
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
    "body": {
      "id": "id",
      "created_by": "created_by",
      "updated_by": "updated_by",
      "deleted_by": "deleted_by",
      "ulid": "ulid",
      "created_at": "created_at",
      "updated_at": "updated_at",
      "deleted_at": "deleted_at",
      "content_skill": "content_skill",
      "content_difficulty": "content_difficulty",
      "content_hours": "content_hours",
      "content_knowledge_level": "content_knowledge_level",
      "user_country": "user_country",
      "user_state": "user_state",
      "flag": "flag",
      "was_required": "was_required",
      "content_version": "content_version",
      "team": "team",
      "content": "content",
      "user": "user",
      "user_position": "user_position"
    }
  },
  inputParamsSchema
}

export default tool