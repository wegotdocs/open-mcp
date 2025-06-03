import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "recoverypassword",
  "toolDescription": "Recover password",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/users/recoveryPassword",
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
      "email": "email"
    }
  },
  inputParamsSchema
}

export default tool