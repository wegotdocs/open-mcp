import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_project",
  "toolDescription": "Retrieve a project given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/projects/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool