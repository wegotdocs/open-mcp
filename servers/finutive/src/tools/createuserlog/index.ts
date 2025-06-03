import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createuserlog",
  "toolDescription": "Add a new activity log",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/users/log",
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
      "type": "type",
      "extra_data": "extra_data",
      "business_id": "business_id",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool