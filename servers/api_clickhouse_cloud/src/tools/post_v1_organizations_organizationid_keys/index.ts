import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v1_organizations_organizationid_keys",
  "toolDescription": "Create key",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/keys",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId"
    },
    "body": {
      "name": "name",
      "expireAt": "expireAt",
      "state": "state",
      "hashData": "hashData",
      "roles": "roles",
      "ipAccessList": "ipAccessList"
    }
  },
  inputParamsSchema
}

export default tool