import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_components",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/components",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "name": "name",
      "parent": "parent",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool