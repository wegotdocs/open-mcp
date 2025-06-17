import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_invoices_id_issue",
  "toolDescription": "Issue an invoice",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/invoices/{id}/issue",
  "method": "post",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "issuedTime": "issuedTime"
    }
  },
  inputParamsSchema
}

export default tool