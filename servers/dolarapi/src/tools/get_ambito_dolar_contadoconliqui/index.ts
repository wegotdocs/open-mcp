import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_ambito_dolar_contadoconliqui",
  "toolDescription": "Dólar Contado con Liquidación",
  "baseUrl": "https://br.dolarapi.com",
  "path": "/v1/ambito/dolares/contadoconliqui",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool