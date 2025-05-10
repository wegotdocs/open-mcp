import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v1_organizations_organizationid_keys_keyid_",
  "toolDescription": "Update key",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/keys/{keyId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId",
      "keyId": "keyId"
    },
    "body": {
      "name": "name",
      "roles": "roles",
      "expireAt": "expireAt",
      "state": "state",
      "ipAccessList": "ipAccessList"
    }
  },
  inputParamsSchema
}

export default tool