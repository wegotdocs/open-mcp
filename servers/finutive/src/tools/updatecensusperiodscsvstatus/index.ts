import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecensusperiodscsvstatus",
  "toolDescription": "Update CSV values",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/census-statements/businesses/{business_id}/csv/status/{period}/{value}",
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
      "period": "period",
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool