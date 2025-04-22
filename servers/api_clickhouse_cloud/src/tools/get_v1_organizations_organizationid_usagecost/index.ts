import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_organizations_organizationid_usagecost",
  "toolDescription": "Get organization usage costs",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/usageCost",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId"
    },
    "query": {
      "from_date": "from_date",
      "to_date": "to_date"
    }
  },
  inputParamsSchema
}

export default tool