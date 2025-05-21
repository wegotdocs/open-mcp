import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_cotizacion_clp",
  "toolDescription": "Peso Chileno",
  "baseUrl": "https://br.dolarapi.com",
  "path": "/v1/cotizaciones/clp",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool