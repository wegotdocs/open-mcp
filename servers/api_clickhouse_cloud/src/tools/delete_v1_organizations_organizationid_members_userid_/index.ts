import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_v1_organizations_organizationid_members_userid_",
  "toolDescription": "Remove an organization member",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/members/{userId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId",
      "userId": "userId"
    }
  },
  inputParamsSchema
}

export default tool