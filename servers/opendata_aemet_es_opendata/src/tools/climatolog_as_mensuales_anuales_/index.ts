import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "climatolog_as_mensuales_anuales_",
  "toolDescription": "Climatologías mensuales anuales.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/valores/climatologicos/mensualesanuales/datos/anioini/{anioIniStr}/aniofin/{anioFinStr}/estacion/{idema}",
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
      "anioIniStr": "anioIniStr",
      "anioFinStr": "anioFinStr",
      "idema": "idema"
    }
  },
  inputParamsSchema
}

export default tool