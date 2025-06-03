import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getclientdatabyid",
  "toolDescription": "Get client data by ID",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/stakeholders/{stakeholderId}",
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
      "stakeholderId": "stakeholderId"
    }
  },
  inputParamsSchema
}

export default tool