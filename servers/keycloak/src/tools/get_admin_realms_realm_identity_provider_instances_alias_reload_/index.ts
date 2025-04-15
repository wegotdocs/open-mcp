import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_identity_provider_instances_alias_reload_",
  "toolDescription": "Reaload keys for the identity provider if the provider supports it, \"true\" is returned if reload was performed, \"false\" if not.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/identity-provider/instances/{alias}/reload-keys",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool