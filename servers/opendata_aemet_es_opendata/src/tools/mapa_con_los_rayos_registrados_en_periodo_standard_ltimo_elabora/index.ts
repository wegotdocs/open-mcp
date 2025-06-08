import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "mapa_con_los_rayos_registrados_en_periodo_standard_ltimo_elabora",
  "toolDescription": "Mapa con los rayos registrados en periodo standard. Último elaborado.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/red/rayos/mapa",
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