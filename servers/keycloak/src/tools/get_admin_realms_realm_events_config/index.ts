import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_events_config",
  "toolDescription": "Get the events provider configuration Returns JSON object with events provider configuration",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/events/config",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool