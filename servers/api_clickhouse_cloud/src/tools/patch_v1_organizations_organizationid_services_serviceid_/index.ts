import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v1_organizations_organizationid_services_serviceid_",
  "toolDescription": "Update service basic details",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/services/{serviceId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId",
      "serviceId": "serviceId"
    },
    "body": {
      "name": "name",
      "ipAccessList": "ipAccessList",
      "privateEndpointIds": "privateEndpointIds",
      "releaseChannel": "releaseChannel",
      "endpoints": "endpoints",
      "transparentDataEncryptionKeyId": "transparentDataEncryptionKeyId"
    }
  },
  inputParamsSchema
}

export default tool