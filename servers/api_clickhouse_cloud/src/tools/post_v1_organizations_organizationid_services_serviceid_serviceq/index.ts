import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v1_organizations_organizationid_services_serviceid_serviceq",
  "toolDescription": "Upsert the service query endpoint for a given instance",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/services/{serviceId}/serviceQueryEndpoint",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId",
      "serviceId": "serviceId"
    },
    "body": {
      "roles": "roles",
      "openApiKeys": "openApiKeys",
      "allowedOrigins": "allowedOrigins"
    }
  },
  inputParamsSchema
}

export default tool