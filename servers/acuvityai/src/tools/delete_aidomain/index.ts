import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_aidomain",
  "toolDescription": "Delete an AI domain given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/aidomains/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool