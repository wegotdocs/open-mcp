import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getfeedbackform",
  "toolDescription": "Get link to a form where you can give feedback on the plugin.",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/get_feedback_form",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool