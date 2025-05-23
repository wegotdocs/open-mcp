import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_client_policies_policies",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-policies/policies",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "policies": "policies",
      "globalPolicies": "globalPolicies"
    }
  },
  inputParamsSchema
}

export default tool