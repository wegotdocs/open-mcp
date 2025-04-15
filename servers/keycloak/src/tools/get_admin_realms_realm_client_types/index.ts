import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_client_types",
  "toolDescription": "List all client types available in the current realm",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-types",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool