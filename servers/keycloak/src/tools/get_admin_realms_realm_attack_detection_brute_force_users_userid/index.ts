import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_attack_detection_brute_force_users_userid",
  "toolDescription": "Get status of a username in brute force detection",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/attack-detection/brute-force/users/{userId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "userId": "userId"
    }
  },
  inputParamsSchema
}

export default tool