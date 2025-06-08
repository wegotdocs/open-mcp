import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "inventario_de_estaciones_valores_climatol_gicos_",
  "toolDescription": "Inventario de estaciones (valores climatológicos).",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/valores/climatologicos/inventarioestaciones/todasestaciones",
  "method": "get",
  "security": [
    {
      "key": "api_key",
      "value": "<mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool