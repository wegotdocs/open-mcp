import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_users",
  "toolDescription": "Get users Returns a stream of users, filtered according to query parameters.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "briefRepresentation": "briefRepresentation",
      "email": "email",
      "emailVerified": "emailVerified",
      "enabled": "enabled",
      "exact": "exact",
      "first": "first",
      "firstName": "firstName",
      "idpAlias": "idpAlias",
      "idpUserId": "idpUserId",
      "lastName": "lastName",
      "max": "max",
      "q": "q",
      "search": "search",
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool