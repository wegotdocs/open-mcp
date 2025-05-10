import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_alert",
  "toolDescription": "Retrieves the alert with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/alerts/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool