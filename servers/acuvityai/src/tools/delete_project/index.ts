import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_project",
  "toolDescription": "Delete a project given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/projects/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool