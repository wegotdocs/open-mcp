import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "signin",
  "toolDescription": "User login",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/users/signin",
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
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool