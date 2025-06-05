import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "groups_list",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/groups/",
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
    "query": {
      "is_paginated": "is_paginated",
      "name": "name",
      "name_contains": "name_contains",
      "name_ends_with": "name_ends_with",
      "name_equals": "name_equals",
      "name_match_all": "name_match_all",
      "name_not_contains": "name_not_contains",
      "name_not_equals": "name_not_equals",
      "name_starts_with": "name_starts_with",
      "owner": "owner",
      "page_no": "page_no",
      "page_size": "page_size",
      "status_contains": "status_contains",
      "status_ends_with": "status_ends_with",
      "status_equals": "status_equals",
      "status_match_all": "status_match_all",
      "status_not_contains": "status_not_contains",
      "status_not_equals": "status_not_equals",
      "status_starts_with": "status_starts_with",
      "team": "team"
    }
  },
  inputParamsSchema
}

export default tool