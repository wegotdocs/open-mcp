import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_cotizaciones",
  "toolDescription": "Cotizaciones",
  "baseUrl": "https://br.dolarapi.com",
  "path": "/v1/cotizaciones",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool