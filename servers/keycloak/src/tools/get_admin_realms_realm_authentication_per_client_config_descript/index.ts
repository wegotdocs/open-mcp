import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_authentication_per_client_config_descript",
  "toolDescription": "Get configuration descriptions for all clients",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/per-client-config-description",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool