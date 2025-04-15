import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_attack_detection_brute_force_users_use",
  "toolDescription": "Clear any user login failures for the user This can release temporary disabled user",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/attack-detection/brute-force/users/{userId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "userId": "userId"
    }
  },
  inputParamsSchema
}

export default tool