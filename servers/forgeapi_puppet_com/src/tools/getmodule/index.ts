import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmodule",
  "toolDescription": "Fetch module",
  "baseUrl": "https://forgeapi.puppet.com",
  "path": "/v3/modules/{module_slug}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "module_slug": "module_slug"
    },
    "query": {
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