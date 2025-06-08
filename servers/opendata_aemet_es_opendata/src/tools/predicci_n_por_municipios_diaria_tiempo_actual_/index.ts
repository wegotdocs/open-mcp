import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "predicci_n_por_municipios_diaria_tiempo_actual_",
  "toolDescription": "Predicción por municipios diaria. Tiempo actual.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/prediccion/especifica/municipio/diaria/{municipio}",
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
      "municipio": "municipio"
    }
  },
  inputParamsSchema
}

export default tool