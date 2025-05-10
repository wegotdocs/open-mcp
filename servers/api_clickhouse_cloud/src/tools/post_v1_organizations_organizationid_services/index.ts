import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v1_organizations_organizationid_services",
  "toolDescription": "Create new service",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/services",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId"
    },
    "body": {
      "name": "name",
      "provider": "provider",
      "region": "region",
      "ipAccessList": "ipAccessList",
      "minReplicaMemoryGb": "minReplicaMemoryGb",
      "maxReplicaMemoryGb": "maxReplicaMemoryGb",
      "numReplicas": "numReplicas",
      "idleScaling": "idleScaling",
      "idleTimeoutMinutes": "idleTimeoutMinutes",
      "isReadonly": "isReadonly",
      "dataWarehouseId": "dataWarehouseId",
      "backupId": "backupId",
      "encryptionKey": "encryptionKey",
      "encryptionAssumedRoleIdentifier": "encryptionAssumedRoleIdentifier",
      "privatePreviewTermsChecked": "privatePreviewTermsChecked",
      "releaseChannel": "releaseChannel",
      "byocId": "byocId",
      "hasTransparentDataEncryption": "hasTransparentDataEncryption",
      "endpoints": "endpoints"
    }
  },
  inputParamsSchema
}

export default tool