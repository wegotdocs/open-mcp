import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createbusinesscreationmessage_1",
  "toolDescription": "Create business creation message",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/business-creation/businesses/{business_id}/message",
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
      "message": "message",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool