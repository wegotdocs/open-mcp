import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "capas_shape_de_estaciones_climatol_gicas_",
  "toolDescription": "Capas SHAPE de estaciones climatológicas de AEMET.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/productos/climatologicos/capasshape/{tipoestacion}",
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
      "tipoestacion": "tipoestacion"
    }
  },
  inputParamsSchema
}

export default tool