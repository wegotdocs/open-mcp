import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_cotizacion_brl",
  "toolDescription": "Real Brasileño",
  "baseUrl": "https://br.dolarapi.com",
  "path": "/v1/cotizaciones/brl",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool