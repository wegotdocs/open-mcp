import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getadminbyid",
  "toolDescription": "Get admin by id",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/admins/{adminId}",
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
      "businessId": "businessId",
      "adminId": "adminId"
    }
  },
  inputParamsSchema
}

export default tool