import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_organizations_organizationid_privateendpointconfig",
  "toolDescription": "Get private endpoint configuration for region within cloud provider for an organization",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/privateEndpointConfig",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId"
    },
    "query": {
      "Cloud provider identifier": "Cloud provider identifier",
      "Cloud provider region": "Cloud provider region"
    }
  },
  inputParamsSchema
}

export default tool