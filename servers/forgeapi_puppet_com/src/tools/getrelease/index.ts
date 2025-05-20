import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrelease",
  "toolDescription": "Fetch module release",
  "baseUrl": "https://forgeapi.puppet.com",
  "path": "/v3/releases/{release_slug}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "release_slug": "release_slug"
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