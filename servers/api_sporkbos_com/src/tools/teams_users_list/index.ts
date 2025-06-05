import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_users_list",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/teams/{id}/users/",
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
      "id": "id"
    },
    "query": {
      "hire_date_after": "hire_date_after",
      "hire_date_at": "hire_date_at",
      "hire_date_before": "hire_date_before",
      "hire_date_match_all": "hire_date_match_all",
      "hire_date_not_at": "hire_date_not_at",
      "is_paginated": "is_paginated",
      "last_active_after": "last_active_after",
      "last_active_at": "last_active_at",
      "last_active_before": "last_active_before",
      "last_active_match_all": "last_active_match_all",
      "last_active_not_at": "last_active_not_at",
      "manager": "manager",
      "name": "name",
      "name_contains": "name_contains",
      "name_ends_with": "name_ends_with",
      "name_equals": "name_equals",
      "name_match_all": "name_match_all",
      "name_not_contains": "name_not_contains",
      "name_not_equals": "name_not_equals",
      "name_starts_with": "name_starts_with",
      "order_by": "order_by",
      "page_no": "page_no",
      "page_size": "page_size",
      "position_contains": "position_contains",
      "position_ends_with": "position_ends_with",
      "position_equals": "position_equals",
      "position_match_all": "position_match_all",
      "position_not_contains": "position_not_contains",
      "position_not_equals": "position_not_equals",
      "position_starts_with": "position_starts_with",
      "show_deactivated": "show_deactivated",
      "sort_by": "sort_by",
      "status": "status",
      "status_contains": "status_contains",
      "status_ends_with": "status_ends_with",
      "status_equals": "status_equals",
      "status_match_all": "status_match_all",
      "status_not_contains": "status_not_contains",
      "status_not_equals": "status_not_equals",
      "status_starts_with": "status_starts_with",
      "term_date_after": "term_date_after",
      "term_date_at": "term_date_at",
      "term_date_before": "term_date_before",
      "term_date_match_all": "term_date_match_all",
      "term_date_not_at": "term_date_not_at",
      "user_role_contains": "user_role_contains",
      "user_role_ends_with": "user_role_ends_with",
      "user_role_equals": "user_role_equals",
      "user_role_match_all": "user_role_match_all",
      "user_role_not_contains": "user_role_not_contains",
      "user_role_not_equals": "user_role_not_equals",
      "user_role_starts_with": "user_role_starts_with"
    }
  },
  inputParamsSchema
}

export default tool