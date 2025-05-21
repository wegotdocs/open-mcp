import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_dolar_cripto",
  "toolDescription": "Dólar Cripto",
  "baseUrl": "https://br.dolarapi.com",
  "path": "/v1/dolares/cripto",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool