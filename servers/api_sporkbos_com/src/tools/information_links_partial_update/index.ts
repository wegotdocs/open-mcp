import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "information_links_partial_update",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/information-links/{id}/",
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
      "page_location": "page_location",
      "is_visible": "is_visible",
      "title": "title",
      "description": "description",
      "video_link": "video_link"
    }
  },
  inputParamsSchema
}

export default tool