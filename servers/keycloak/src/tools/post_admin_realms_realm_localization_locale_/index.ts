import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_localization_locale_",
  "toolDescription": "Import localization from uploaded JSON file",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/localization/{locale}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "locale": "locale"
    }
  },
  inputParamsSchema
}

export default tool