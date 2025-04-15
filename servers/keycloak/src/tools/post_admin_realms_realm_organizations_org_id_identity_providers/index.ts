import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_organizations_org_id_identity_providers",
  "toolDescription": "Adds the identity provider with the specified id to the organization",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/organizations/{org-id}/identity-providers",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool