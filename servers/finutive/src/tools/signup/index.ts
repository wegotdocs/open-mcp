import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "signup",
  "toolDescription": "Register new user",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/users/signup",
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
      "first_name": "first_name",
      "last_name": "last_name",
      "business_name": "business_name"
    }
  },
  inputParamsSchema
}

export default tool