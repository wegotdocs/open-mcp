import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmunicipiousingget",
  "toolDescription": "Información específica municipio.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/maestro/municipio/{municipio}",
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
      "municipio": "municipio"
    }
  },
  inputParamsSchema
}

export default tool