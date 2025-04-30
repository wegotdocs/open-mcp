import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_aidomain",
  "toolDescription": "Retrieve an AI domain given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/aidomains/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool