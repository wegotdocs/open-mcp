import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_organizations_organizationid_prometheus",
  "toolDescription": "Get organization metrics",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/prometheus",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId"
    },
    "query": {
      "filtered_metrics": "filtered_metrics"
    }
  },
  inputParamsSchema
}

export default tool