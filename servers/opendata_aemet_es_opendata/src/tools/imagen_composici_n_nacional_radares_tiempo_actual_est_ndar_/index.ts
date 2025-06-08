import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "imagen_composici_n_nacional_radares_tiempo_actual_est_ndar_",
  "toolDescription": "Imagen composición nacional radares. Tiempo actual estándar.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/red/radar/nacional",
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