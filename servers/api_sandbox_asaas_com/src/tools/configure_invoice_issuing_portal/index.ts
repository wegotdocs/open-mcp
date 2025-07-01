import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "configure_invoice_issuing_portal",
  "toolDescription": "Configure invoice issuing portal",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/fiscalInfo/nationalPortal",
  "method": "post",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "enabled": "enabled"
    }
  },
  inputParamsSchema
}

export default tool