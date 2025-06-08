import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "mapas_de_an_lisis_ltima_pasada_",
  "toolDescription": "Mapas de análisis. Última pasada.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/mapasygraficos/analisis",
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