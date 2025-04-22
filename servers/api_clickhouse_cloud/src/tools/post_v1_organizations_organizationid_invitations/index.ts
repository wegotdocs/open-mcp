import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v1_organizations_organizationid_invitations",
  "toolDescription": "Create an invitation",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/invitations",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId"
    },
    "body": {
      "email": "email",
      "role": "role"
    }
  },
  inputParamsSchema
}

export default tool