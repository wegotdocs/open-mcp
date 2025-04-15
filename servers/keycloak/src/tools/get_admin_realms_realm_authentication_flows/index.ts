import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_authentication_flows",
  "toolDescription": "Get authentication flows Returns a stream of authentication flows.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/flows",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool