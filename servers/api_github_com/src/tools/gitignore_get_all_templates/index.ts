import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gitignore_get_all_templates",
  "toolDescription": "Get all gitignore templates",
  "baseUrl": "https://api.github.com",
  "path": "/gitignore/templates",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool