import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "changebusinesscreationstatus",
  "toolDescription": "Change business creation status",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/business-creation/businesses/{business_id}/status/{status}",
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
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool