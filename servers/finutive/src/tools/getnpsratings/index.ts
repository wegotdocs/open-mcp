import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnpsratings",
  "toolDescription": "Get NPS ratings",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/nps/ratings",
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
    "query": {
      "business_id": "business_id",
      "pageable": "pageable",
      "start_date": "start_date",
      "end_date": "end_date",
      "view_more": "view_more"
    }
  },
  inputParamsSchema
}

export default tool