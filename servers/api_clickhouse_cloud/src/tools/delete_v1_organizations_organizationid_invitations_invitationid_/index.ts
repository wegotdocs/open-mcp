import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_v1_organizations_organizationid_invitations_invitationid_",
  "toolDescription": "Delete organization invitation",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations/{organizationId}/invitations/{invitationId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "organizationId": "organizationId",
      "invitationId": "invitationId"
    }
  },
  inputParamsSchema
}

export default tool