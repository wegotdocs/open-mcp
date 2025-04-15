import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_roles",
  "toolDescription": "Create a new role for the realm or client",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/roles",
  "method": "post",
  "security": [],
  "paramsMap": {
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