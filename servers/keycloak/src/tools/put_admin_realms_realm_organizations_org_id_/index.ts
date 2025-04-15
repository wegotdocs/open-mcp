import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_organizations_org_id_",
  "toolDescription": "Updates the organization",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/organizations/{org-id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "alias": "alias",
      "enabled": "enabled",
      "description": "description",
      "redirectUrl": "redirectUrl",
      "attributes": "attributes",
      "domains": "domains",
      "members": "members",
      "identityProviders": "identityProviders"
    }
  },
  inputParamsSchema
}

export default tool