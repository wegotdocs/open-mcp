import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getusers",
  "toolDescription": "List users",
  "baseUrl": "https://forgeapi.puppet.com",
  "path": "/v3/users",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset",
      "sort_by": "sort_by",
      "with_html": "with_html",
      "include_fields": "include_fields",
      "exclude_fields": "exclude_fields"
    },
    "header": {
      "If-Modified-Since": "If-Modified-Since"
    }
  },
  inputParamsSchema
}

export default tool