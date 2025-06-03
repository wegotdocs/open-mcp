import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportnpsratings",
  "toolDescription": "Export NPS ratings",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/nps/ratings/export",
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
      "business_id": "business_id",
      "start_date": "start_date",
      "end_date": "end_date",
      "view_more": "view_more"
    }
  },
  inputParamsSchema
}

export default tool