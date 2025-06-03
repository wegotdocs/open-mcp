import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnpssurvey",
  "toolDescription": "Get NPS survey by hash",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/nps/survey/{hash}",
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
      "hash": "hash"
    }
  },
  inputParamsSchema
}

export default tool