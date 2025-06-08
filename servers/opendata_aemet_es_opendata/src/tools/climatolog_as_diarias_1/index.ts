import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "climatolog_as_diarias_1",
  "toolDescription": "Climatologías diarias.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/valores/climatologicos/diarios/datos/fechaini/{fechaIniStr}/fechafin/{fechaFinStr}/todasestaciones",
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
      "fechaFinStr": "fechaFinStr"
    }
  },
  inputParamsSchema
}

export default tool