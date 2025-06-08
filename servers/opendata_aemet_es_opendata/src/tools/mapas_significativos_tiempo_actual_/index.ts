import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "mapas_significativos_tiempo_actual_",
  "toolDescription": "Mapas significativos. Tiempo actual.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/mapasygraficos/mapassignificativos/fecha/{fecha}/{ambito}/{dia}",
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
      "fecha": "fecha",
      "ambito": "ambito",
      "dia": "dia"
    }
  },
  inputParamsSchema
}

export default tool