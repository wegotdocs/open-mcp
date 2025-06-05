import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "supports_partial_update",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/supports/{id}/",
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
      "type": "type",
      "title": "title",
      "note": "note",
      "resolution": "resolution",
      "status": "status",
      "importance": "importance",
      "flag": "flag",
      "read_at": "read_at",
      "resolved_at": "resolved_at",
      "submission_url": "submission_url",
      "team": "team",
      "issuer": "issuer",
      "support_staff": "support_staff",
      "resolved_by": "resolved_by"
    }
  },
  inputParamsSchema
}

export default tool