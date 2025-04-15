import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_roles_by_id_role_id_",
  "toolDescription": "Update the role",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/roles-by-id/{role-id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "role-id": "role-id"
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