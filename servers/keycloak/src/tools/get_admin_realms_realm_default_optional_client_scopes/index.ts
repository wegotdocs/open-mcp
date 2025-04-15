import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_default_optional_client_scopes",
  "toolDescription": "Get realm optional client scopes. Only name and ids are returned.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/default-optional-client-scopes",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool