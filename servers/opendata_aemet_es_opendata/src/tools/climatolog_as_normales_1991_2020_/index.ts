import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "climatolog_as_normales_1991_2020_",
  "toolDescription": "Climatologías normales (1991-2020).",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/valores/climatologicos/normales/estacion/{idema}",
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
      "idema": "idema"
    }
  },
  inputParamsSchema
}

export default tool