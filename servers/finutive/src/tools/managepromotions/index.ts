import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "managepromotions",
  "toolDescription": "Manage promotions",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/promotions/manage",
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
    "query": {
      "business_id": "business_id",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool