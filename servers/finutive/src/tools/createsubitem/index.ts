import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createsubitem",
  "toolDescription": "Create a new subitem",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/timetracker/subItems",
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
      "id": "id",
      "name": "name",
      "businessId": "businessId",
      "global": "global"
    }
  },
  inputParamsSchema
}

export default tool