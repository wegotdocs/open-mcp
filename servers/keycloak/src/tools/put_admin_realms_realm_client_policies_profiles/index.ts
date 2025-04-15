import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_client_policies_profiles",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-policies/profiles",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "profiles": "profiles",
      "globalProfiles": "globalProfiles"
    }
  },
  inputParamsSchema
}

export default tool