import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_authentication_flows",
  "toolDescription": "Create a new authentication flow",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/flows",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "alias": "alias",
      "description": "description",
      "providerId": "providerId",
      "topLevel": "topLevel",
      "builtIn": "builtIn",
      "authenticationExecutions": "authenticationExecutions"
    }
  },
  inputParamsSchema
}

export default tool