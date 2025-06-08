import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "perfiles_verticales_de_ozono_tiempo_actual_",
  "toolDescription": "Perfiles verticales de ozono. Tiempo actual.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/red/especial/perfilozono/estacion/{estacion}",
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
      "estacion": "estacion"
    }
  },
  inputParamsSchema
}

export default tool