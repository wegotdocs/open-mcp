import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invitemanager",
  "toolDescription": "Invite manager",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/managers/invite",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "body": {
      "email": "email",
      "firstname": "firstname",
      "lastname": "lastname",
      "role": "role"
    }
  },
  inputParamsSchema
}

export default tool