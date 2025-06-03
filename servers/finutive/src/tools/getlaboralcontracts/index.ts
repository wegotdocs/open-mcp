import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getlaboralcontracts",
  "toolDescription": "List labor contracts",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/laboral/contracts",
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
      "size": "size",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool