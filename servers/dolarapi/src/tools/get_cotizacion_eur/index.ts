import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_cotizacion_eur",
  "toolDescription": "Euro",
  "baseUrl": "https://br.dolarapi.com",
  "path": "/v1/cotizaciones/eur",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool