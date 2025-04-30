import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_feedback",
  "toolDescription": "Retrieve a feedback given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/feedbacks/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool