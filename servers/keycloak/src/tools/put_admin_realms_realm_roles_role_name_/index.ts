import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_roles_role_name_",
  "toolDescription": "Update a role by name",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/roles/{role-name}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "role-name": "role-name"
    },
    "body": {
      "id": "id",
      "name": "name",
      "description": "description",
      "composite": "composite",
      "composites": "composites",
      "clientRole": "clientRole",
      "containerId": "containerId",
      "attributes": "attributes"
    }
  },
  inputParamsSchema
}

export default tool