import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v1_organizations_organizationid_",
  "toolDescription": "Update organization details",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId"
    },
    "body": {
      "name": "name",
      "privateEndpoints": "privateEndpoints"
    }
  },
  inputParamsSchema
}

export default tool