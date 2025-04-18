import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "security_advisories_list_global_advisories",
  "toolDescription": "List global security advisories",
  "baseUrl": "https://api.github.com",
  "path": "/advisories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "ghsa_id": "ghsa_id",
      "type": "type",
      "cve_id": "cve_id",
      "ecosystem": "ecosystem",
      "severity": "severity",
      "cwes": "cwes",
      "is_withdrawn": "is_withdrawn",
      "affects": "affects",
      "published": "published",
      "updated": "updated",
      "modified": "modified",
      "epss_percentage": "epss_percentage",
      "epss_percentile": "epss_percentile",
      "before": "before",
      "after": "after",
      "direction": "direction",
      "per_page": "per_page",
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool