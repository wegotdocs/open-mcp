import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "datos_de_contaminaci_n_de_fondo_tiempo_actual_",
  "toolDescription": "Datos de contaminación de fondo. Tiempo actual.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/red/especial/contaminacionfondo/estacion/{nombre_estacion}",
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
      "nombre_estacion": "nombre_estacion"
    }
  },
  inputParamsSchema
}

export default tool