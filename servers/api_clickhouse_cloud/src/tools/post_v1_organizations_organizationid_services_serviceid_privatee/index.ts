import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v1_organizations_organizationid_services_serviceid_privatee",
  "toolDescription": "Create a private endpoint.",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/services/{serviceId}/privateEndpoint",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId",
      "serviceId": "serviceId"
    },
    "body": {
      "id": "id",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool