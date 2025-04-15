import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_users_count",
  "toolDescription": "Returns the number of users that match the given criteria.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/count",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "email": "email",
      "emailVerified": "emailVerified",
      "enabled": "enabled",
      "firstName": "firstName",
      "lastName": "lastName",
      "q": "q",
      "search": "search",
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool