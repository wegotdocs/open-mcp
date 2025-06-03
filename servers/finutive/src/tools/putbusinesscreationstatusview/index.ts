import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "putbusinesscreationstatusview",
  "toolDescription": "Update view status",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/business-creation/businesses/{business_id}/view-status/{view_status}",
  "method": "put",
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
      "view_status": "view_status"
    }
  },
  inputParamsSchema
}

export default tool