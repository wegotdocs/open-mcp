import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmodules",
  "toolDescription": "List modules",
  "baseUrl": "https://forgeapi.puppet.com",
  "path": "/v3/modules",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset",
      "sort_by": "sort_by",
      "query": "query",
      "tag": "tag",
      "owner": "owner",
      "with_tasks": "with_tasks",
      "with_plans": "with_plans",
      "with_pdk": "with_pdk",
      "premium": "premium",
      "exclude_premium": "exclude_premium",
      "endorsements": "endorsements",
      "operatingsystem": "operatingsystem",
      "operatingsystemrelease": "operatingsystemrelease",
      "pe_requirement": "pe_requirement",
      "puppet_requirement": "puppet_requirement",
      "with_minimum_score": "with_minimum_score",
      "module_groups": "module_groups",
      "show_deleted": "show_deleted",
      "hide_deprecated": "hide_deprecated",
      "hide_contribution": "hide_contribution",
      "only_latest": "only_latest",
      "slugs": "slugs",
      "with_html": "with_html",
      "include_fields": "include_fields",
      "exclude_fields": "exclude_fields",
      "starts_with": "starts_with",
      "supported": "supported",
      "with_release_since": "with_release_since"
    },
    "header": {
      "If-Modified-Since": "If-Modified-Since"
    }
  },
  inputParamsSchema
}

export default tool