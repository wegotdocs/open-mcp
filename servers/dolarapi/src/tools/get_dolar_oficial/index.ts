import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_dolar_oficial",
  "toolDescription": "Dólar Oficial",
  "baseUrl": "https://br.dolarapi.com",
  "path": "/v1/dolares/oficial",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool