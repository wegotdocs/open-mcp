import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sendpromotionsemail",
  "toolDescription": "Send promotional emails",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/promotions",
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
    "path": {
      "business_id": "business_id"
    },
    "body": {
      "phone": "phone",
      "email": "email",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool