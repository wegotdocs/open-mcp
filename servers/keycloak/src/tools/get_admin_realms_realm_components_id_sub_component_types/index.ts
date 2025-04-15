import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_components_id_sub_component_types",
  "toolDescription": "List of subcomponent types that are available to configure for a particular parent component.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/components/{id}/sub-component-types",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool