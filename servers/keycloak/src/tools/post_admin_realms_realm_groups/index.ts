import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_groups",
  "toolDescription": "create or add a top level realm groupSet or create child.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/groups",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "path": "path",
      "parentId": "parentId",
      "subGroupCount": "subGroupCount",
      "subGroups": "subGroups",
      "attributes": "attributes",
      "realmRoles": "realmRoles",
      "clientRoles": "clientRoles",
      "access": "access"
    }
  },
  inputParamsSchema
}

export default tool