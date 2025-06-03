import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createseries_1",
  "toolDescription": "Create instance series",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/instance/series",
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
    "body": {
      "business_id": "business_id",
      "name": "name",
      "prefix": "prefix",
      "invoice_starter": "invoice_starter",
      "is_default": "is_default"
    }
  },
  inputParamsSchema
}

export default tool