import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_client_policies_profiles",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-policies/profiles",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "include-global-profiles": "include-global-profiles"
    }
  },
  inputParamsSchema
}

export default tool