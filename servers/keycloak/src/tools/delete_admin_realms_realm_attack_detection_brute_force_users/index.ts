import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_attack_detection_brute_force_users",
  "toolDescription": "Clear any user login failures for all users This can release temporary disabled users",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/attack-detection/brute-force/users",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool