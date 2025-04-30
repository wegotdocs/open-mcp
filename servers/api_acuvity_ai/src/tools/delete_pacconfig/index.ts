import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_pacconfig",
  "toolDescription": "Delete an pacconfig given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/pacconfigs/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool