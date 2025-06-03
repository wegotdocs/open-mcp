import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "asociateticket",
  "toolDescription": "Associate stakeholder to document",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/asociate_ticket",
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
      "invoice_id": "invoice_id",
      "client_provider_id": "client_provider_id",
      "client_provider_name": "client_provider_name",
      "type": "type",
      "client_provider_cif": "client_provider_cif"
    }
  },
  inputParamsSchema
}

export default tool