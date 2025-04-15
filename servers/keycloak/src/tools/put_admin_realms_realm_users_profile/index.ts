import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_users_profile",
  "toolDescription": "Set the configuration for the user profile",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/profile",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "attributes": "attributes",
      "groups": "groups",
      "unmanagedAttributePolicy": "unmanagedAttributePolicy"
    }
  },
  inputParamsSchema
}

export default tool