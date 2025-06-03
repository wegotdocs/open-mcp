import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbusinesscontactlistforuser",
  "toolDescription": "Get list of all contacts from business",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/users/{user_id}/contact",
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
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool