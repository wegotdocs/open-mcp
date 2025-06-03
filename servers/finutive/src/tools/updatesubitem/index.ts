import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatesubitem",
  "toolDescription": "Update a subitem",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/timetracker/subItems/{id}",
  "method": "patch",
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
      "id": "id"
    },
    "body": {
      "id": "b_id",
      "name": "name",
      "businessId": "businessId",
      "global": "global"
    }
  },
  inputParamsSchema
}

export default tool