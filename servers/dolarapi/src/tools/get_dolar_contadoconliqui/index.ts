import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_dolar_contadoconliqui",
  "toolDescription": "Dólar Contado con Liquidación",
  "baseUrl": "https://br.dolarapi.com",
  "path": "/v1/dolares/contadoconliqui",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool