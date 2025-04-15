import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_autobahnen",
  "toolDescription": "Liste verfügbarer Autobahnen",
  "baseUrl": "https://verkehr.autobahn.de/o/autobahn",
  "path": "/",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool