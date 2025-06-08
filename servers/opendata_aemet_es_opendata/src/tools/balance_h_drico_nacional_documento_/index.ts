import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "balance_h_drico_nacional_documento_",
  "toolDescription": "Balance hídrico nacional (documento).",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/productos/climatologicos/balancehidrico/{anio}/{decena}",
  "method": "get",
  "security": [
    {
      "key": "api_key",
      "value": "<mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "anio": "anio",
      "decena": "decena"
    }
  },
  inputParamsSchema
}

export default tool