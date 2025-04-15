import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_authentication_config_description_provide",
  "toolDescription": "Get authenticator provider's configuration description",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/config-description/{providerId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "providerId": "providerId"
    }
  },
  inputParamsSchema
}

export default tool