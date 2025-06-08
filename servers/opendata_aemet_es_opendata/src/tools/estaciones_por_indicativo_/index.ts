import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "estaciones_por_indicativo_",
  "toolDescription": "Estaciones por indicativo.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/valores/climatologicos/inventarioestaciones/estaciones/{estaciones}",
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
      "estaciones": "estaciones"
    }
  },
  inputParamsSchema
}

export default tool