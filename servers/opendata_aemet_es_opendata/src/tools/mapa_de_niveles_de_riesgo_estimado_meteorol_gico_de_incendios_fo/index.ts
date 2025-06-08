import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "mapa_de_niveles_de_riesgo_estimado_meteorol_gico_de_incendios_fo",
  "toolDescription": "Mapa de niveles de riesgo estimado meteorológico de incendios forestales.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/incendios/mapasriesgo/estimado/area/{area}",
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
      "area": "area"
    }
  },
  inputParamsSchema
}

export default tool