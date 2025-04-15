import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_group_by_path_path_",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/group-by-path/{path}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "path": "path"
    }
  },
  inputParamsSchema
}

export default tool