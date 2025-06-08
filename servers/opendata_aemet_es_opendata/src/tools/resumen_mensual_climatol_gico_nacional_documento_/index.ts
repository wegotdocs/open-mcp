import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "resumen_mensual_climatol_gico_nacional_documento_",
  "toolDescription": "Resumen mensual climatológico nacional (documento).",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/productos/climatologicos/resumenclimatologico/nacional/{anio}/{mes}",
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
      "mes": "mes"
    }
  },
  inputParamsSchema
}

export default tool