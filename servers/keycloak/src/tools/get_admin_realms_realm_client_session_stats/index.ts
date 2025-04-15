import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_client_session_stats",
  "toolDescription": "Get client session stats Returns a JSON map.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-session-stats",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool