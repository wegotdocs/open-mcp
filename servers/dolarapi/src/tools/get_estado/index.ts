import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_estado",
  "toolDescription": "Estado de la API",
  "baseUrl": "https://br.dolarapi.com",
  "path": "/v1/estado",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool