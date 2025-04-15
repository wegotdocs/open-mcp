import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_organizations_org_id_identity_provider",
  "toolDescription": "Removes the identity provider with the specified alias from the organization",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/organizations/{org-id}/identity-providers/{alias}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "alias": "alias"
    }
  },
  inputParamsSchema
}

export default tool