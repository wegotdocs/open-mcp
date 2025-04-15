import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_default_groups_groupid_",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/default-groups/{groupId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "groupId": "groupId"
    }
  },
  inputParamsSchema
}

export default tool