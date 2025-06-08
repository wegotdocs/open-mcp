import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "avisos_de_fen_menos_meteorol_gicos_adversos_ltimo_",
  "toolDescription": "Avisos de Fenómenos Meteorológicos Adversos. Último.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/avisos_cap/ultimoelaborado/area/{area}",
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