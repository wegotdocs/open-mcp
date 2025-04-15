import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_client_policies_policies",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-policies/policies",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "include-global-policies": "include-global-policies"
    }
  },
  inputParamsSchema
}

export default tool