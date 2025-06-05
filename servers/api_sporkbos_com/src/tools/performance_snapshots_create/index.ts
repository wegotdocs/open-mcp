import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "performance_snapshots_create",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/performance-snapshots/",
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
      "name": "name",
      "description": "description",
      "number": "number",
      "start_date": "start_date",
      "end_date": "end_date",
      "performance_start_date": "performance_start_date",
      "performance_end_date": "performance_end_date",
      "required_all_users": "required_all_users",
      "team": "team",
      "users": "users"
    }
  },
  inputParamsSchema
}

export default tool