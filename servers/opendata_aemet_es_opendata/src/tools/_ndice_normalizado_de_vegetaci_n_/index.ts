import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "_ndice_normalizado_de_vegetaci_n_",
  "toolDescription": "Índice normalizado de vegetación.",
  "baseUrl": "https://opendata.aemet.es/opendata",
  "path": "/api/satelites/producto/nvdi",
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