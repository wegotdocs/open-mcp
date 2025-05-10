import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v1_organizations_organizationid_services_serviceid_replica",
  "toolDescription": "Update service auto scaling settings",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/services/{serviceId}/replicaScaling",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId",
      "serviceId": "serviceId"
    },
    "body": {
      "minReplicaMemoryGb": "minReplicaMemoryGb",
      "maxReplicaMemoryGb": "maxReplicaMemoryGb",
      "numReplicas": "numReplicas",
      "idleScaling": "idleScaling",
      "idleTimeoutMinutes": "idleTimeoutMinutes"
    }
  },
  inputParamsSchema
}

export default tool