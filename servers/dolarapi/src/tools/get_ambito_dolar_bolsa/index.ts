import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_ambito_dolar_bolsa",
  "toolDescription": "Dólar Bolsa",
  "baseUrl": "https://br.dolarapi.com",
  "path": "/v1/ambito/dolares/bolsa",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool