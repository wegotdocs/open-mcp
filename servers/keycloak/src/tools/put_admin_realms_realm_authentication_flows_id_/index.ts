import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_authentication_flows_id_",
  "toolDescription": "Update an authentication flow",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/flows/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "id": "b_id",
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