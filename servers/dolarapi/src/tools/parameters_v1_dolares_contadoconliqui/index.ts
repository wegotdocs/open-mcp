import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_v1_dolares_contadoconliqui",
  "toolDescription": "",
  "baseUrl": "https://br.dolarapi.com",
  "path": "/v1/dolares/contadoconliqui",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool