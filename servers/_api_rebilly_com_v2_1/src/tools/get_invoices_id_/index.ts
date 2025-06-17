import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_invoices_id_",
  "toolDescription": "Retrieve an invoice",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/invoices/{id}",
  "method": "get",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "header": {
      "Accept": "Accept"
    }
  },
  inputParamsSchema
}

export default tool