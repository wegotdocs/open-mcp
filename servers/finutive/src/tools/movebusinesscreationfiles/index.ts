import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "movebusinesscreationfiles",
  "toolDescription": "Move business creation files",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/business-creation/files",
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
      "docs": "docs"
    }
  },
  inputParamsSchema
}

export default tool