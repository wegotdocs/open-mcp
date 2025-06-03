import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sendcsvemail",
  "toolDescription": "Send census statement CSV by email",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/census-statements/businesses/{business_id}/email",
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
      "content": "content",
      "csv_id": "csv_id",
      "period": "period"
    }
  },
  inputParamsSchema
}

export default tool