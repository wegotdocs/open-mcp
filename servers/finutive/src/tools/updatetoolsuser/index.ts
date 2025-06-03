import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatetoolsuser",
  "toolDescription": "Update tools for a user in a business",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/user/{user_id}/tools",
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
      "business_id": "business_id",
      "user_id": "user_id"
    },
    "body": {
      "tools": "tools"
    }
  },
  inputParamsSchema
}

export default tool