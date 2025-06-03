import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "changepassword",
  "toolDescription": "Change password",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/users/update-password",
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
      "oldPassword": "oldPassword",
      "newPassword": "newPassword"
    }
  },
  inputParamsSchema
}

export default tool