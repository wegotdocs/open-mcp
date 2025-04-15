import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_identity_provider_instances_alias_mapper_",
  "toolDescription": "Get mapper types for identity provider",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/identity-provider/instances/{alias}/mapper-types",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool