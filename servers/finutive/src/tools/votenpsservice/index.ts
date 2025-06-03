import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "votenpsservice",
  "toolDescription": "Submit service-specific NPS vote",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/nps/service",
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
    "path": {
      "business_id": "business_id"
    },
    "body": {
      "services": "services"
    }
  },
  inputParamsSchema
}

export default tool