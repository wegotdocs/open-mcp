import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "predicci_n_de_radiaci_n_ultravioleta_uvi_",
  "toolDescription": "Predicción de radiación ultravioleta (UVI).",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/prediccion/especifica/uvi/{dia}",
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
      "dia": "dia"
    }
  },
  inputParamsSchema
}

export default tool