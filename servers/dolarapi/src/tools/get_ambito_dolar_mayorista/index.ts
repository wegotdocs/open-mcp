import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_ambito_dolar_mayorista",
  "toolDescription": "Dólar Mayorista",
  "baseUrl": "https://br.dolarapi.com",
  "path": "/v1/ambito/dolares/mayorista",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool