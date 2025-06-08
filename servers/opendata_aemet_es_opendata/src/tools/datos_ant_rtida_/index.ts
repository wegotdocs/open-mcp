import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "datos_ant_rtida_",
  "toolDescription": "Datos Antártida.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/antartida/datos/fechaini/{fechaIniStr}/fechafin/{fechaFinStr}/estacion/{identificacion}",
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
      "fechaIniStr": "fechaIniStr",
      "fechaFinStr": "fechaFinStr",
      "identificacion": "identificacion"
    }
  },
  inputParamsSchema
}

export default tool