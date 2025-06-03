import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setservicebusiness",
  "toolDescription": "Set service for business",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/services",
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
      "status": "status",
      "service_id": "service_id",
      "manager_id": "manager_id"
    }
  },
  inputParamsSchema
}

export default tool