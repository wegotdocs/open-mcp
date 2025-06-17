import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_invoices_id_items",
  "toolDescription": "",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/invoices/{id}/items",
  "method": "parameters",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool