import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_groups_group_id_",
  "toolDescription": "Update group, ignores subgroups.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/groups/{group-id}",
  "method": "put",
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