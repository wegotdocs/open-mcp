import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatemailconfirm",
  "toolDescription": "Confirm email update",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/users/email/confirm",
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
    "query": {
      "otp": "otp",
      "mail": "mail"
    }
  },
  inputParamsSchema
}

export default tool