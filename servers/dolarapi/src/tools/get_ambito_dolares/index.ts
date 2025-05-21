import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_ambito_dolares",
  "toolDescription": "Dólares Ámbito",
  "baseUrl": "https://br.dolarapi.com",
  "path": "/v1/ambito/dolares",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool