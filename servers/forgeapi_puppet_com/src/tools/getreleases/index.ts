import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getreleases",
  "toolDescription": "List module releases",
  "baseUrl": "https://forgeapi.puppet.com",
  "path": "/v3/releases",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset",
      "sort_by": "sort_by",
      "module": "module",
      "owner": "owner",
      "with_pdk": "with_pdk",
      "operatingsystem": "operatingsystem",
      "operatingsystemrelease": "operatingsystemrelease",
      "pe_requirement": "pe_requirement",
      "puppet_requirement": "puppet_requirement",
      "module_groups": "module_groups",
      "show_deleted": "show_deleted",
      "hide_deprecated": "hide_deprecated",
      "hide_contribution": "hide_contribution",
      "with_html": "with_html",
      "include_fields": "include_fields",
      "exclude_fields": "exclude_fields",
      "supported": "supported"
    },
    "header": {
      "If-Modified-Since": "If-Modified-Since"
    }
  },
  inputParamsSchema
}

export default tool