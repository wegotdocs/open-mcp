import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_organizations_organizationid_members",
  "toolDescription": "List organization members",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/members",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId"
    }
  },
  inputParamsSchema
}

export default tool