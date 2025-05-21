import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_dolares",
  "toolDescription": "Dólares",
  "baseUrl": "https://br.dolarapi.com",
  "path": "/v1/dolares",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool