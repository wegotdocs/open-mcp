import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getlaboralteam",
  "toolDescription": "Get labor team",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/laboral/team",
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
      "getLaboralTeamRequestDto": "getLaboralTeamRequestDto"
    }
  },
  inputParamsSchema
}

export default tool