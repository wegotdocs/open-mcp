import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "boards_contents_list",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/boards/{ulid}/contents/",
  "method": "get",
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
    "query": {
      "content_name": "content_name",
      "content_type": "content_type",
      "due_date_range_end": "due_date_range_end",
      "due_date_range_start": "due_date_range_start",
      "importance": "importance",
      "name": "name",
      "order_by": "order_by",
      "owner": "owner",
      "page_no": "page_no",
      "page_size": "page_size",
      "show_completed": "show_completed",
      "sort_by": "sort_by",
      "status": "status",
      "team": "team",
      "tree_view": "tree_view"
    }
  },
  inputParamsSchema
}

export default tool