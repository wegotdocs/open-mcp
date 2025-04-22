import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v1_organizations_organizationid_members_userid_",
  "toolDescription": "Update organization member.",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/members/{userId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId",
      "userId": "userId"
    },
    "body": {
      "role": "role"
    }
  },
  inputParamsSchema
}

export default tool