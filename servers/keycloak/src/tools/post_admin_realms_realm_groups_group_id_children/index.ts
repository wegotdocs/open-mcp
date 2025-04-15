import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_groups_group_id_children",
  "toolDescription": "Set or create child.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/groups/{group-id}/children",
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