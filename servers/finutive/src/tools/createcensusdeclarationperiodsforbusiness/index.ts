import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcensusdeclarationperiodsforbusiness",
  "toolDescription": "Crea periodos de declaración de censo para un negocio",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/scripts/create_census_declaration_periods_for_business",
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
    "query": {
      "businessId": "businessId"
    }
  },
  inputParamsSchema
}

export default tool