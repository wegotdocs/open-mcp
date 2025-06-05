import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "positions_update",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/positions/{id}/",
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
      "required_knowledge": "required_knowledge",
      "position_parent_data": "position_parent_data",
      "skills": "skills",
      "required_learning": "required_learning",
      "position_group_data": "position_group_data",
      "job_description_data": "job_description_data",
      "files": "files",
      "name": "name",
      "description": "description",
      "icon": "icon",
      "colour": "colour",
      "status": "status",
      "team": "team",
      "position_level": "position_level",
      "parent": "parent",
      "job_description": "job_description"
    }
  },
  inputParamsSchema
}

export default tool