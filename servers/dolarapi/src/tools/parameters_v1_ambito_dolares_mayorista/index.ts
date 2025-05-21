import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_v1_ambito_dolares_mayorista",
  "toolDescription": "",
  "baseUrl": "https://br.dolarapi.com",
  "path": "/v1/ambito/dolares/mayorista",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool