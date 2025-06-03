import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "afterbanks",
  "toolDescription": "Process Afterbanks webhook",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/banks/afterbanks",
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
      "action": "action",
      "bank_id": "bank_id",
      "user_data": "user_data",
      "account_id": "account_id",
      "start_date": "start_date",
      "multiaccount": "multiaccount",
      "reload": "reload",
      "otp_data": "otp_data"
    }
  },
  inputParamsSchema
}

export default tool