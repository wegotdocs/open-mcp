import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_identity_provider_import_config",
  "toolDescription": "Import identity provider from JSON body",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/identity-provider/import-config",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool