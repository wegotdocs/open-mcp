import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_localization_locale_key_",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/localization/{locale}/{key}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "key": "key",
      "locale": "locale"
    }
  },
  inputParamsSchema
}

export default tool