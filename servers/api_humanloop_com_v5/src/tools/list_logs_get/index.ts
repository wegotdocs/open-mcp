import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_logs_get",
  "toolDescription": "List Logs",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/logs",
  "method": "get",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "file_id": "file_id",
      "page": "page",
      "size": "size",
      "version_id": "version_id",
      "version_status": "version_status",
      "id": "id",
      "search": "search",
      "metadata_search": "metadata_search",
      "start_date": "start_date",
      "end_date": "end_date",
      "include_parent": "include_parent",
      "in_trace_filter": "in_trace_filter",
      "sample": "sample",
      "include_trace_children": "include_trace_children"
    }
  },
  inputParamsSchema
}

export default tool