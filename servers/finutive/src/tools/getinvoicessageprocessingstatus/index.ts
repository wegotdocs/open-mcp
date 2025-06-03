import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getinvoicessageprocessingstatus",
  "toolDescription": "Get data process sage data",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/businesses/{businessId}/invoices/sage/process/{idProcesoIME}",
  "method": "get",
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
      "businessId": "businessId",
      "idProcesoIME": "idProcesoIME"
    }
  },
  inputParamsSchema
}

export default tool