import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_default_groups",
  "toolDescription": "Get group hierarchy.  Only name and ids are returned.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/default-groups",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool