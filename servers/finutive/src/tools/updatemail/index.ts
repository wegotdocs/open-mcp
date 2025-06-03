import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatemail",
  "toolDescription": "Update email",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/users/email",
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
      "newEmail": "newEmail",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool