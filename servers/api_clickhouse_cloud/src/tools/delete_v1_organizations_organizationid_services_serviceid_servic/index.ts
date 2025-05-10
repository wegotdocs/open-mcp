import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_v1_organizations_organizationid_services_serviceid_servic",
  "toolDescription": "Delete the service query endpoint for a given instance",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/services/{serviceId}/serviceQueryEndpoint",
  "method": "delete",
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