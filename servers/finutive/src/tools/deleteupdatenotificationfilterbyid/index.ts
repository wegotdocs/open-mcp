import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteupdatenotificationfilterbyid",
  "toolDescription": "Delete filter by id",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/update-notifications/filters/{filter_id}",
  "method": "delete",
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
      "filter_id": "filter_id"
    }
  },
  inputParamsSchema
}

export default tool