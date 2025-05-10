import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v1_organizations_organizationid_services_serviceid_clickpip",
  "toolDescription": "Create ClickPipe",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/services/{serviceId}/clickpipes",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId",
      "serviceId": "serviceId"
    },
    "body": {
      "name": "name",
      "description": "description",
      "source": "source",
      "destination": "destination",
      "fieldMappings": "fieldMappings"
    }
  },
  inputParamsSchema
}

export default tool