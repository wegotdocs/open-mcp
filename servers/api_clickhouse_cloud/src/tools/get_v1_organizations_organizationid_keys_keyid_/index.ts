import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_organizations_organizationid_keys_keyid_",
  "toolDescription": "Get key details",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/keys/{keyId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId",
      "keyId": "keyId"
    }
  },
  inputParamsSchema
}

export default tool