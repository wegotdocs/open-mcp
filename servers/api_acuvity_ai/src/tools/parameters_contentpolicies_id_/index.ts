import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_contentpolicies_id_",
  "toolDescription": "",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/contentpolicies/{id}",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool