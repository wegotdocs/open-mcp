import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbusinessaccounts",
  "toolDescription": "Get business accounts",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/banks/accounts",
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
      "business_id": "business_id"
    },
    "query": {
      "requestDto": "requestDto"
    }
  },
  inputParamsSchema
}

export default tool