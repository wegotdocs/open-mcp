import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patchmaincontact",
  "toolDescription": "Change main business contact",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/contactRoles/{contact_role_id}/main",
  "method": "patch",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "contact_role_id": "contact_role_id"
    }
  },
  inputParamsSchema
}

export default tool