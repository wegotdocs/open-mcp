import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "predicci_n_de_monta_a_tiempo_pasado_",
  "toolDescription": "Predicción de montaña. Tiempo pasado.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/prediccion/especifica/montaña/pasada/area/{area}",
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