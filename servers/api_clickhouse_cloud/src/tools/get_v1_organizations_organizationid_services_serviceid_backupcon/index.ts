import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_organizations_organizationid_services_serviceid_backupcon",
  "toolDescription": "Get service backup configuration",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/services/{serviceId}/backupConfiguration",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId",
      "serviceId": "serviceId"
    }
  },
  inputParamsSchema
}

export default tool