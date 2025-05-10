import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v1_organizations_organizationid_services_serviceid_backupc",
  "toolDescription": "Update service backup configuration",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/services/{serviceId}/backupConfiguration",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId",
      "serviceId": "serviceId"
    },
    "body": {
      "backupPeriodInHours": "backupPeriodInHours",
      "backupRetentionPeriodInHours": "backupRetentionPeriodInHours",
      "backupStartTime": "backupStartTime"
    }
  },
  inputParamsSchema
}

export default tool