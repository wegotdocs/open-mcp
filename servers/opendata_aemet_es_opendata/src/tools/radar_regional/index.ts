import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "radar_regional",
  "toolDescription": "Imagen gráfica radar regional. Tiempo actual estándar.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/red/radar/regional/{radar}",
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
      "radar": "radar"
    }
  },
  inputParamsSchema
}

export default tool