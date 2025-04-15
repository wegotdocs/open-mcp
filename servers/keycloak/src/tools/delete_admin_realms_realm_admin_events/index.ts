import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_admin_events",
  "toolDescription": "Delete all admin events",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/admin-events",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool