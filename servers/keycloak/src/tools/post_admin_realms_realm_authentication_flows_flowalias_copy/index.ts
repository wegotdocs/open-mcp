import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_authentication_flows_flowalias_copy",
  "toolDescription": "Copy existing authentication flow under a new name The new name is given as 'newName' attribute of the passed JSON object",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/flows/{flowAlias}/copy",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "flowAlias": "flowAlias"
    }
  },
  inputParamsSchema
}

export default tool