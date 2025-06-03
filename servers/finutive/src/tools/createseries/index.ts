import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createseries",
  "toolDescription": "Create a new serie",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/series",
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
      "businessId": "businessId"
    },
    "body": {
      "name": "name",
      "prefix": "prefix",
      "invoice_starter": "invoice_starter",
      "is_default": "is_default"
    }
  },
  inputParamsSchema
}

export default tool