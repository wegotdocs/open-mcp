import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "skills_create",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/skills/",
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
      "files": "files",
      "is_favourite": "is_favourite",
      "linked_positions": "linked_positions",
      "name": "name",
      "stage": "stage",
      "difficulty": "difficulty",
      "id_number": "id_number",
      "description": "description",
      "learn_frequency": "learn_frequency",
      "recurring_interval": "recurring_interval",
      "active": "active",
      "beginner_hours": "beginner_hours",
      "intermediate_hours": "intermediate_hours",
      "advanced_hours": "advanced_hours",
      "master_hours": "master_hours",
      "team": "team",
      "category": "category"
    }
  },
  inputParamsSchema
}

export default tool