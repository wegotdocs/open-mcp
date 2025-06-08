import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "predicci_n_ccaa_ma_ana_archivo_",
  "toolDescription": "Predicción CCAA mañana. Archivo.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/prediccion/ccaa/manana/{ccaa}/elaboracion/{fecha}",
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
      "ccaa": "ccaa",
      "fecha": "fecha"
    }
  },
  inputParamsSchema
}

export default tool