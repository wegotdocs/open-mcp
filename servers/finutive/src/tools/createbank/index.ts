import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createbank",
  "toolDescription": "Create bank",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/banks",
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
      "bank_id": "bank_id",
      "afterbanks_service": "afterbanks_service",
      "afterbanks_params": "afterbanks_params",
      "business_bank": "business_bank",
      "name": "name",
      "active": "active",
      "logo": "logo",
      "priority": "priority",
      "neobank": "neobank"
    }
  },
  inputParamsSchema
}

export default tool