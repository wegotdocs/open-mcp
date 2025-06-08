import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "mensajes_de_observaci_n_ltimo_elaborado_",
  "toolDescription": "Mensajes de observación. Último elaborado.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/observacion/convencional/mensajes/tipomensaje/{tipomensaje}",
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
      "tipomensaje": "tipomensaje"
    }
  },
  inputParamsSchema
}

export default tool