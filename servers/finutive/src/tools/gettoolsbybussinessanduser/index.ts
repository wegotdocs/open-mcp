import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettoolsbybussinessanduser",
  "toolDescription": "Get tools for a business and user",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/user/{user_id}/tools",
  "method": "get",
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
    }
  },
  inputParamsSchema
}

export default tool