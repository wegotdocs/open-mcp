import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "savebusinesscreationtype",
  "toolDescription": "Save business creation type",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/business-creation/type",
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
      "business_id": "business_id"
    },
    "body": {
      "business_type": "business_type"
    }
  },
  inputParamsSchema
}

export default tool