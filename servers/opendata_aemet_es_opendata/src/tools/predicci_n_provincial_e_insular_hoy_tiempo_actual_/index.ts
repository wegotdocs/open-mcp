import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "predicci_n_provincial_e_insular_hoy_tiempo_actual_",
  "toolDescription": "Predicción provincial e insular hoy. Tiempo actual.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/prediccion/provincia/hoy/{provincia}",
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
      "provincia": "provincia"
    }
  },
  inputParamsSchema
}

export default tool